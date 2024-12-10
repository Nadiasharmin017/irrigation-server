import express from "express";
import { SensorControllers } from "./sensor.controller.js";
const router = express.Router();

router.get("/sensor", SensorControllers.getSensorData);
router.post("/sensor", SensorControllers.createSensorData);

export const SensorRouter = router;