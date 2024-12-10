import express from "express";
import { TreeControllers } from "./tree.controller.js";

const router = express.Router();

// Define routes
router.get("/", TreeControllers.getTrees); // Fetch all trees
router.post("/add", TreeControllers.inputTree); // Add a new tree
router.delete("/delete/:id", TreeControllers.deleteTree); // Delete a tree by ID
router.put("/update/:id", TreeControllers.updateTree); // Update a tree by ID

export const TreeRouter = router;
