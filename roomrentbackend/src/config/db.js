// import mysql from "mysql2";
// import dotenv from "dotenv";

// dotenv.config();

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// db.connect((err) => {
//     if (err) {
//         console.error("DB connection failed", err);
//         return;
//     }
//     console.log("MySQL Connected");
// });

// export default db;


import mysql from "mysql2/promise";

const db = await mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "flatdb",
    port: 10019
});



try {
    console.log("✅ MySQL Connected");
}
catch (err) {
    console.log("❌ DB Error:", err);
}




export default db;

//
//

// const mysql = require('mysql2/promise');

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10
// });

// module.exports = pool;


// const mysql = require("mysql2/promise");

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

// module.exports = pool;