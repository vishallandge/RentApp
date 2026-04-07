import express from "express";
import { getTenantDashboard } from "../controllers/tenantController.js";

const router = express.Router();

// Example route
router.get("/dashboard", getTenantDashboard);

export default router;