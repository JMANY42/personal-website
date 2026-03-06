// routes/canvas.js
import db from '../data/canvasdb.js';

const CANVAS_WIDTH = 100;
const CANVAS_HEIGHT = 100;
const COOLDOWN_MS = 5000; // 5 seconds

// GET /canvas — return full canvas state
export async function getCanvas(req, res) {
  const pixels = db.prepare('SELECT x, y, color FROM pixels').all();
  res.json({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT, pixels });
};

// POST /canvas/pixel — place a pixel
export function postPixel(req, res, broadcast) {
  const { x, y, color } = req.body;
  const userId = req.ip; // or use a session/cookie ID

  // Validate inputs
  if (
    !Number.isInteger(x) || !Number.isInteger(y) ||
    x < 0 || x >= CANVAS_WIDTH ||
    y < 0 || y >= CANVAS_HEIGHT ||
    !/^#[0-9A-Fa-f]{6}$/.test(color)
  ) {
    return res.status(400).json({ error: 'Invalid pixel data' });
  }

  // Check cooldown
  const now = Date.now();
  const cooldown = db.prepare('SELECT last_place FROM cooldowns WHERE user_id = ?').get(userId);
  if (cooldown && now - cooldown.last_place < COOLDOWN_MS) {
    const remaining = Math.ceil((COOLDOWN_MS - (now - cooldown.last_place)) / 1000);
    return res.status(429).json({ error: `Cooldown: ${remaining}s remaining` });
  }

  // Upsert the pixel
  db.prepare(`
    INSERT INTO pixels (x, y, color, updated_at, user_id)
    VALUES (?, ?, ?, ?, ?)
    ON CONFLICT(x, y) DO UPDATE SET
      color = excluded.color,
      updated_at = excluded.updated_at,
      user_id = excluded.user_id
  `).run(x, y, color, now, userId);

  // Update cooldown
  db.prepare(`
    INSERT INTO cooldowns (user_id, last_place) VALUES (?, ?)
    ON CONFLICT(user_id) DO UPDATE SET last_place = excluded.last_place
  `).run(userId, now);

  // TODO: broadcast via WebSocket here (pass pixel to your ws server)
  broadcast({ x, y, color }); // add this after the DB upsert
  res.json({ ok: true, x, y, color });
};