import express from "express";
import { SensorControllers } from "./sensor.controller.js";

const router = express.Router();

// Define routes
router.get("/", SensorControllers.getSensorData); // Fetch all sensor data
router.post("/sensor", SensorControllers.createSensorData); // Create new sensor data
router.delete("/:id", SensorControllers.deleteSensorData); // Delete sensor data by ID
router.put("/:id", SensorControllers.updateSensorData); // Update sensor data by ID

export const SensorRouter = router;
