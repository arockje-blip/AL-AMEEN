const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'data.db');

const db = new sqlite3.Database(DB_PATH);
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT UNIQUE, password_hash TEXT, created_at TEXT)`);
  db.run(`CREATE TABLE IF NOT EXISTS enquiries (id INTEGER PRIMARY KEY, name TEXT, email TEXT, message TEXT, created_at TEXT)`);
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
  const normalized = String(email).trim().toLowerCase();
  db.get('SELECT id FROM users WHERE email = ?', [normalized], (err, row) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    if (row) return res.status(409).json({ message: 'Email already registered' });
    bcrypt.hash(String(password), 10, (hashErr, hash) => {
      if (hashErr) return res.status(500).json({ message: 'Hash error' });
      const now = new Date().toISOString();
      db.run('INSERT INTO users (email, password_hash, created_at) VALUES (?, ?, ?)', [normalized, hash, now], function (insertErr) {
        if (insertErr) return res.status(500).json({ message: 'Insert failed' });
        return res.json({ message: 'User created', id: this.lastID });
      });
    });
  });
});

app.post('/api/enquiry', (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ message: 'name, email and message required' });
  const now = new Date().toISOString();
  db.run('INSERT INTO enquiries (name, email, message, created_at) VALUES (?, ?, ?, ?)', [String(name), String(email).trim().toLowerCase(), String(message), now], function (err) {
    if (err) return res.status(500).json({ message: 'Insert failed' });
    return res.json({ message: 'Enquiry received', id: this.lastID });
  });
});

app.get('/api/enquiries', (req, res) => {
  db.all('SELECT id, name, email, message, created_at FROM enquiries ORDER BY id DESC LIMIT 200', [], (err, rows) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json({ enquiries: rows });
  });
});

app.get('/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
