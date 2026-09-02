# Wandor

*Where will you go next?*

A travel-planning SPA: browse curated trips, and generate personalized,
day-by-day AI itineraries for any destination and any length of trip (1–30
days). Runs behind AWS WAF on CloudFront, with real authentication and a
serverless backend — the infrastructure lives in the sibling
[`waf-ops-platform/`](../waf-ops-platform/) project, and the top-level
[README](../README.md) has the full deployment walkthrough.

## Features

- **Discover** — a curated catalog of trips with detail pages (`/trip/:id`).
- **AI Generator** — pick a destination, number of days (1–30), style and
  budget; get a structured itinerary: themed days with morning/afternoon/evening
  plans naming real places, food recommendations, insider tips, and a budget
  estimate. Free plan includes **7 generations per account**, enforced
  server-side.
- **History** — your generated trips, stored per-account in DynamoDB, available
  from any browser you log into.
- **Accounts** — email/password signup with email verification, code-based
  password reset, and optional "Sign in with Google" — all on Amazon Cognito.
- **Pricing** — Free plan (active) and a $9 Pro tier marked *Coming soon*.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS · react-router v7 ·
`amazon-cognito-identity-js` (auth) · `aws-rum-web` (optional real-user
monitoring). No server code lives in this repo — the API is a Lambda in
[`waf-ops-platform/modules/api/`](../waf-ops-platform/modules/api/).

## Local development

```bash
npm ci
cp .env.example .env   # see table below; can be left empty to start
npm run dev            # http://localhost:5173
```

Works in three modes depending on `.env`:

1. **No values set** — UI runs, auth shows a "backend not configured" notice.
   Good for pure UI work.
2. **Cognito values set** — real signup/login against the deployed user pool.
   API calls go to `/api` (same origin), so they only succeed when served
   through CloudFront; from localhost the generator will fail — that's expected.
3. **Cognito + RUM values set** — as above, plus browser telemetry to
   CloudWatch RUM.

### Environment variables

All are build-time (`import.meta.env`) and **safe to expose** — they are baked
into the public bundle by design. Values come from
`terraform -chdir=waf-ops-platform/envs/data output`.

| Variable | What it is |
|---|---|
| `VITE_COGNITO_USER_POOL_ID` | Cognito user pool id (`user_pool_id` output) |
| `VITE_COGNITO_CLIENT_ID` | SPA app client id (`user_pool_client_id`) |
| `VITE_COGNITO_DOMAIN` | Hosted-UI domain, bare hostname (`cognito_domain`) — used only for the Google redirect |
| `VITE_RUM_*` (4 vars, optional) | CloudWatch RUM monitor id / identity pool / guest role / region. RUM is compiled out entirely when unset. |

**There is deliberately no AI key here.** The Gemini/OpenRouter keys live in AWS
Secrets Manager and are only ever read by the backend Lambda. If you find
yourself adding a key to this file, stop — that key would ship to every visitor.

### Scripts

| Command | Does |
|---|---|
| `npm run dev` | Vite dev server on :5173 |
| `npm run build` | Type-check + production build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | oxlint |

## How auth works

- **Email/password** uses the Cognito SRP flow via `amazon-cognito-identity-js`
  — the password never leaves the browser in plaintext. Signup requires an
  emailed verification code; password reset is also code-based.
- **Google** redirects to the Cognito Hosted UI's federated endpoint
  (`/oauth2/authorize?identity_provider=Google`), which returns to `/login?code=…`;
  the app exchanges the code for tokens at the Hosted UI's `/oauth2/token`.
- Every API call sends the Cognito **ID token** as a `Bearer` header;
  API Gateway's JWT authorizer verifies it before the Lambda runs.

## API contract (served under `/api`, same origin)

| Route | Body / returns |
|---|---|
| `POST /api/trips/generate` | `{destination, days (1–30), preferences?}` → `{trip}` with the structured itinerary. `402 {error:"trip_limit_reached"}` once the lifetime cap of 7 is hit. |
| `GET /api/trips` | `{trips, generated, limit}` — newest first |
| `DELETE /api/trips/{id}` | `id` is the trip's `sk`, URL-encoded |

## Deploying

Two paths, both documented in the [top-level README](../README.md):

- **Terraform upload** — build (`npm run build`), then `terraform apply` in
  `waf-ops-platform/envs/prod` uploads `dist/` to the private origin bucket.
- **CI/CD** — pushes to `main` run [`deploy.yml`](.github/workflows/deploy.yml):
  build → `aws s3 sync dist/` → CloudFront invalidation, authenticated via
  GitHub OIDC (no AWS keys stored). Repo *variables* it needs are listed at the
  top of the workflow file.

## Notes

- AI itineraries carry a visible "AI-generated — verify opening hours and
  prices" disclaimer; treat them as a plan, not gospel.
- The app stores no personal data client-side beyond Cognito's own token cache;
  trips live server-side in DynamoDB keyed by your account.
