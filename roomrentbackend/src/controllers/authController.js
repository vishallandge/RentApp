import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CreateAuthTable from "../models/authSchema.js";

CreateAuthTable();

export const signup = async (req, res) => {
    const { username, email, mobile, address, password, userType } = req.body;

    if (!username || !email || !mobile || !address || !password || !userType) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        db.query(
            "INSERT INTO users (username, email, mobile, address, password, userType) VALUES (?, ?, ?, ?, ?, ?)",
            [username, email, mobile, address, hashedPassword, userType],
            (err) => {
                if (err) {
                    return res.status(500).json({
                        message: "Failed to register user",
                        error: err.message,
                    });
                }

                return res.status(201).json({ message: "User registered successfully" });
            }
        );
    } catch (error) {
        return res.status(500).json({
            message: "Failed to hash password",
            error: error.message,
        });
    }
};

export const login = (req, res) => {
    const { email, password, userType } = req.body;

    if (!email || !password || !userType) {
        return res.status(400).json({ message: "Email, password and userType are required" });
    }

    db.query(
        "SELECT * FROM users WHERE email = ? AND userType = ?",
        [email, userType],
        async (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to login",
                    error: err.message,
                });
            }

            if (result.length === 0) {
                return res.status(400).json({ message: "User not found" });
            }

            const user = result[0];
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials" });
            }

            const token = jwt.sign(
                { id: user.id, userType: user.userType },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );

            return res.json({ token, userType: user.userType });
        }
    );
};
// const jwt = require("jsonwebtoken");

// exports.googleCallback = (req, res) => {
//   const token = jwt.sign(
//     { id: req.user.id },
//     process.env.JWT_SECRET,
//     { expiresIn: "7d" }
//   );

//   res.redirect(`http://localhost:3000/login-success?token=${token}`);
// };