/**
 * Vercel Serverless Function
 * POST /api/contact  — receive a contact/feedback form submission
 * GET  /api/contact  — list all submissions (for demo; protect with auth in production)
 */

// In-memory store — resets on each cold start.
// For persistence, connect a DB (e.g. Vercel Postgres, Supabase, MongoDB Atlas).
const submissions = [];

export default function handler(req, res) {
  // ── CORS headers ────────────────────────────────────────────────────────────
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // ── POST /api/contact ───────────────────────────────────────────────────────
  if (req.method === 'POST') {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'name, email, and message are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    const entry = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    submissions.push(entry);
    console.log('📬 New submission:', entry);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received.',
    });
  }

  // ── GET /api/contact ────────────────────────────────────────────────────────
  if (req.method === 'GET') {
    return res.status(200).json({ count: submissions.length, submissions });
  }

  res.status(405).json({ error: 'Method Not Allowed' });
}
