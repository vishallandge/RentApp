import dotenv from "dotenv";
dotenv.config();   // 👈 sabse pehle

import app from "./src/app.js";

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

// require('dotenv').config();
// const app = require('./app');

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });