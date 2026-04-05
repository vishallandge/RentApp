import express from "express";
import { getOwnerDashboard, addProperty, filterProperty, updateProperty, deleteProperty, manageListings } from "../controllers/ownerController.js";

const router = express.Router();

// Example route
router.get("/dashboard/:owner_id", getOwnerDashboard);
router.post("/property/:property_id", addProperty);
router.get("/property", filterProperty);
router.put("/property/:property_id", updateProperty);
router.delete("/property/:property_id", deleteProperty);
router.get("/property/:owner_id", manageListings); // Manage Listings route

export default router;