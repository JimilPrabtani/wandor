# Wandor

*Where will you go next?*

A travel-planning SPA: browse curated trips, and generate personalized,
day-by-day AI itineraries for any destination and any length of trip (1–30
days). Hosted on Vercel — the same repo holds the Vite frontend (`src/`) and
the serverless API (`api/`).

## Features

- **Discover** — a curated catalog of trips with detail pages (`/trip/:id`).
- **AI Generator** — pick a destination, number of days (1–30), style and
  budget; get a structured itinerary: themed days with morning/afternoon/evening
  plans naming real places, food recommendations, insider tips, and a budget
  estimate.
- **History** — your generated trips (persistence landing soon — currently
  returned once per generation, not stored).
- **Accounts** — one-click "Sign in with Google" via Google Identity Services.
  No passwords, no email verification codes.
- **Pricing** — Free plan (active) and a $9 Pro tier marked *Coming soon*.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS · react-router v7 ·
Google Identity Services (auth) · Vercel serverless functions (`api/`) ·
OpenRouter (AI providers, free models).

## Local development

```bash
npm ci
cp .env.example .env   # set VITE_GOOGLE_CLIENT_ID (public GCP OAuth client id)
npm run dev            # http://localhost:5173
```

For AI generation locally, run `vercel dev` instead of `npm run dev` so
`/api/*` resolves to the serverless functions, with `OPENROUTER_API_KEY` and
`GOOGLE_CLIENT_ID` in `.env` (server-only, no `VITE_` prefix).

Works in two modes depending on `.env`:

1. **No values set** — UI runs, sign-in shows a "not configured" notice.
   Good for pure UI work.
2. **`VITE_GOOGLE_CLIENT_ID` set** — real Sign in with Google. The GCP OAuth
   client's Authorized JavaScript origins must include `http://localhost:5173`
   and your Vercel URL.

### Environment variables

| Variable | What it is |
|---|---|
| `VITE_GOOGLE_CLIENT_ID` | GCP OAuth client id (Google Cloud Console → Credentials). Public — baked into the bundle by design. |
| `GOOGLE_CLIENT_ID` (server-only) | Same GCP client id, set in Vercel env vars — the API checks ID-token audience against it. |
| `GEMINI_API_KEY` (server-only) | Google AI Studio key (https://aistudio.google.com/apikey). Preferred AI provider — never prefixed with `VITE_`. |
| `GEMINI_MODEL` (server-only, optional) | Gemini model id, e.g. `gemini-2.0-flash` (default). Must be a text chat model. |
| `OPENROUTER_API_KEY` (server-only) | Fallback OpenRouter key, set in Vercel env vars (used when `GEMINI_API_KEY` is absent). |
| `OPENROUTER_MODEL` (server-only, optional) | Primary model, e.g. `google/gemma-4-31b-it:free` — must be a text chat model. |
| `OPENROUTER_FALLBACK_MODEL` (server-only, optional) | Second free model, e.g. `nvidia/nemotron-3-super-120b-a12b:free`. |
| `PROVIDER_TIMEOUT_MS` (server-only, optional) | Per-model abort budget in ms (default 25000). Raise for slow free models, but keep attempts × models under the function's `maxDuration` (60s in `vercel.json`, Pro plan). |

**There is deliberately no AI key in the client.** The OpenRouter key lives in
Vercel environment variables and is only ever read by `api/`. If you find
yourself adding a key to a `VITE_*` variable, stop — that key would ship to
every visitor.

### Scripts

| Command | Does |
|---|---|
| `npm run dev` | Vite dev server on :5173 (no `/api` — generation needs `vercel dev`) |
| `npm run build` | Type-check + production build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | oxlint |

## How auth works

- **Sign in with Google** uses Google Identity Services: the official button
  returns a Google ID token (JWT) in-page — no redirects, no passwords.
- The token is kept in `localStorage` and its expiry checked client-side;
  when it lapses you simply sign in again.
- Every API call sends the Google **ID token** as a `Bearer` header;
  `api/trips/generate.ts` re-validates it with Google (`tokeninfo`: signature,
  expiry, audience) before spending AI quota.

## API contract (Vercel functions under `/api`)

| Route | Body / returns |
|---|---|
| `POST /api/trips/generate` | `{destination, days (1–30), preferences?}` → `{trip}` with the structured itinerary. `503 {error:"model_unavailable"}` / `504 {error:"model_timeout"}` when free models are busy, `429 {error:"rate_limited"}` on rate limits. |
| `GET /api/trips` | Stub: `{trips: [], generated: 0, limit: 7}` until history storage lands |
| `DELETE /api/trips/{id}` | Stub: acknowledges the id |

## Deploying

Vercel (Git integration auto-deploys pushes to `main`; or explicitly):

```bash
npx vercel --prod
```

Required production env vars (Vercel dashboard → Project Settings →
Environment Variables): `VITE_GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_ID`,
`OPENROUTER_API_KEY` (+ optional `OPENROUTER_MODEL` /
`OPENROUTER_FALLBACK_MODEL`). Also add the Vercel URL as an Authorized
JavaScript origin on the GCP OAuth client, or Google sign-in will fail.

## Notes

- AI itineraries carry a visible "AI-generated — verify opening hours and
  prices" disclaimer; treat them as a plan, not gospel.
- The app stores no personal data client-side beyond the Google ID token;
  trips are currently returned once, not stored.
