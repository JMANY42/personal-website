import Database from 'better-sqlite3';

const db = new Database('src/data/canvas.db');

// Enable WAL mode for better concurrent read performance
db.pragma('journal_mode = WAL');

// Create the pixels table
db.exec(`
  CREATE TABLE IF NOT EXISTS pixels (
    x         INTEGER NOT NULL,
    y         INTEGER NOT NULL,
    color     TEXT    NOT NULL DEFAULT '#FFFFFF',
    updated_at INTEGER NOT NULL DEFAULT (unixepoch()),
    user_id   TEXT,
    PRIMARY KEY (x, y)
  )
`);

// Optional: cooldown tracking table
db.exec(`
  CREATE TABLE IF NOT EXISTS cooldowns (
    user_id    TEXT    PRIMARY KEY,
    last_place INTEGER NOT NULL
  )
`);

export default db; 