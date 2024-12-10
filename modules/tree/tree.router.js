import express from "express";
import { TreeControllers } from "./tree.controller";

const router = express.Router();

// Define routes
router.get("/trees", TreeControllers.getTrees); // Fetch all trees
router.post("/trees", TreeControllers.inputTree); // Add a new tree

export const TreeRouter = router;
