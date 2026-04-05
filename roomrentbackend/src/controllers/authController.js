import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import CreateAuthTable from "../models/authSchema.js";

await CreateAuthTable();

const signup = async (req, res) => {
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

const login = async (req, res) => {
    try {
        const { email, password, userType } = req.body;

        if (!email || !password || !userType) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Query the database
        const [result] = await db.query(
            "SELECT * FROM users WHERE email = ? AND userType = ?",
            [email, userType]
        );

        // Check if user exists
        if (result.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const user = result[0];

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user.id, userType: user.userType },
            "saurabh123",
            { expiresIn: "1d" }
        );

        // Success response
        return res.status(200).json({
            token,
            userType: user.userType,
            message: "Login successful"
        });

    } catch (err) {
        console.error(err); // Good practice to log the actual error for debugging
        return res.status(500).json({
            message: "Internal server error",
        });
    }
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
export { signup, login };
