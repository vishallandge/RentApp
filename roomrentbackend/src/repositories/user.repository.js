const db = require('../config/db');

exports.createUser = async (user) => {
  const sql = `
    INSERT INTO users (name, email, password)
    VALUES (?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    user.name,
    user.email,
    user.password
  ]);
  return result.insertId;
};

exports.getUserByEmail = async (email) => {
  const [rows] = await db.execute(
    "SELECT * FROM users WHERE email=?",
    [email]
  );
  return rows[0];
};