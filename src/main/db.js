const sqlite3 = require('sqlite3');
const path = require('path');
const { app } = require('electron');

// Use persistent database location
const dbPath = path.join(app.getPath('userData'), 'smartleave.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Failed to open database:', err);
  } else {
    console.log('✅ Database loaded from:', dbPath);
    createTables();
  }
});

function createTables() {
  db.run(
    `CREATE TABLE IF NOT EXISTS admin (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )`,
    (err) => {
      if (err) console.error('❌ Table creation failed:', err);
      else {
        console.log('✅ Admin table ready');
        seedAdmin();
      }
    }
  );
}

function seedAdmin() {
  const defaultUser = 'admin';
  const defaultPass = '1234';

  db.get('SELECT * FROM admin WHERE username = ?', [defaultUser], (err, row) => {
    if (err) {
      console.error('❌ Error checking admin user:', err);
      return;
    }

    if (!row) {
      db.run(
        'INSERT INTO admin (username, password) VALUES (?, ?)',
        [defaultUser, defaultPass],
        (insertErr) => {
          if (insertErr) console.error('❌ Failed to insert default admin:', insertErr);
          else console.log('✅ Default admin created (username: admin, password: 1234)');
        }
      );
    }
  });
}

module.exports = db;
