const db = require("../config/db");

exports.findByGoogleId = async (googleId) => {
  const [rows] = await db.query(
    "SELECT * FROM users WHERE google_id = ?",
    [googleId]
  );
  return rows[0];
};

exports.createUser = async ({ googleId, name, email }) => {
  const [result] = await db.query(
    "INSERT INTO users (google_id, name, email) VALUES (?, ?, ?)",
    [googleId, name, email]
  );
  return result.insertId;
};