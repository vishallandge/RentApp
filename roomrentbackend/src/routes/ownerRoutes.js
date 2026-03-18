import express from "express";
import { getOwnerDashboard } from "../controllers/ownerController.js";

const router = express.Router();

// Example route
router.get("/dashboard", getOwnerDashboard);

export default router;