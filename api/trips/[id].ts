// DELETE /api/trips/{id} — stateless Phase 1 stub.
//
// Nothing is stored server-side yet, so there is nothing to delete; the
// History page already removes the card optimistically. Acknowledge the id
// so the UI stays consistent. Replace with real KV/Postgres delete later.
export default async function handler(req: any, res: any) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }
  if (!req.headers?.authorization) {
    return res.status(401).json({ error: 'unauthorized' });
  }
  const id = decodeURIComponent(req.query?.id ?? '');
  if (!id.startsWith('trip#')) return res.status(400).json({ error: 'bad_id' });
  return res.status(200).json({ deleted: id });
}
