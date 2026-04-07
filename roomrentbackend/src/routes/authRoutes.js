import express from "express";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);//sigup cha route banvla ahe jo sangel ki singup call karycha ahe 
router.post("/login", login);

export default router;


// const express = require("express");
// const passport = require("passport");
// const router = express.Router();
// const authController = require("../controllers/authController");

// router.get(
//   "/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// router.get(
//   "/google/callback",
//   passport.authenticate("google", { session: false }),
//   authController.googleCallback
// );

// module.exports = router;