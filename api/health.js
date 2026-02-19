/**
 * Vercel Serverless Function
 * GET /api/health
 */
export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  res.status(200).json({
    status: 'ok',
    project: 'ShelterLink',
    timestamp: new Date().toISOString(),
  });
}
