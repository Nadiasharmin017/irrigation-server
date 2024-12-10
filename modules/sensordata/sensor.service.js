import { Sensor } from "./sensor.model.js";

// Function to fetch all sensor data from the database
const getSensorDataFromDB = async () => {
  try {
    const result = await Sensor.find().populate("customerId"); // Populating customer details
    return result;
  } catch (error) {
    console.error("Error fetching sensor data from DB:", error);
    throw new Error("Error fetching sensor data");
  }
};

// Function to create a new sensor data entry
const createSensorDataInDB = async (sensorData) => {
  try {
    const newSensorData = new Sensor(sensorData);
    await newSensorData.save();
    return newSensorData;
  } catch (error) {
    console.error("Error creating sensor data in DB:", error);
    throw new Error("Error creating sensor data");
  }
};

export const SensorServices = {
  getSensorDataFromDB,
  createSensorDataInDB,
};