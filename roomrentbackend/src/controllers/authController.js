const jwt = require("jsonwebtoken");

exports.googleCallback = (req, res) => {
  const token = jwt.sign(
    { id: req.user.id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.redirect(`http://localhost:3000/login-success?token=${token}`);
};