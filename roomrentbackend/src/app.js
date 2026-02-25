// // const express = require('express');
// // const cors = require('cors');
// // const helmet = require('helmet');
// // const morgan = require('morgan');

// // const app = express();

// // app.use(cors());
// // app.use(helmet());
// // app.use(morgan('dev'));
// // app.use(express.json());

// // app.get('/', (req, res) => {
// //   res.send('API Running');
// // });

// // app.use('/api/users', require('./routes/user.routes'));

// // module.exports = app;


// // app.js
// const express = require('express');
// const authRoutes = require('./routes/auth');
// const messagesRoutes = require('./routes/messages');

// const app = express();

// // Home route – simple link to login
// app.get('/', (req, res) => {
//   res.send(`
//     <h1>Gmail Login Demo</h1>
//     <a href="/auth/login">Login with Google</a>
//   `);
// });

// // Mount routes
// app.use('/auth', authRoutes);
// app.use('/messages', messagesRoutes);

// module.exports = app;



const express = require("express");
const cors = require("cors");
const passport = require("passport");
require("dotenv").config();
require("./config/passport");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(passport.initialize());

app.use("/api/auth", authRoutes);

module.exports = app;