// main/db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'localdata.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS admin (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )`);

  // Insert admin only once if not exists
  db.get('SELECT COUNT(*) AS count FROM admin', (err, row) => {
    if (!row.count) {
      db.run('INSERT INTO admin (username, password) VALUES (?, ?)', ['admin', '1234']);
    }
  });
});

module.exports = db;
