// GET /api/trips — stateless Phase 1 stub.
//
// Persistence (Vercel KV/Postgres) is deferred, so history is always empty
// for now. Returning 200 with an empty list keeps the History page in its
// designed empty-state (CTA to generate) instead of an error banner.
// Remove the _note field when real storage lands.
export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }
  if (!req.headers?.authorization) {
    return res.status(401).json({ error: 'unauthorized' });
  }
  return res.status(200).json({
    trips: [],
    generated: 0,
    limit: 7,
    _note: 'history persistence not yet wired — trips are returned once, not stored',
  });
}
