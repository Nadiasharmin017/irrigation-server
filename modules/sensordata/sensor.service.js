import  Sensor  from "./sensor.model.js";

// Fetch all sensor data from DB
const getSensorDataFromDB = async () => {
  try {
    const result = await Sensor.find().populate("customerId"); // Populate customer details
    return result;
  } catch (error) {
    console.error("Error fetching sensor data from DB:", error);
    throw new Error("Error fetching sensor data");
  }
};

// Create new sensor data
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

// Delete sensor data by ID
const deleteSensorDataFromDB = async (id) => {
  try {
    const result = await Sensor.findByIdAndDelete(id); // Delete by ID
    return result;
  } catch (error) {
    console.error("Error deleting sensor data from DB:", error);
    throw new Error("Error deleting sensor data");
  }
};

// Update sensor data by ID
const updateSensorDataInDB = async (id, updatedSensorData) => {
  try {
    const result = await Sensor.findByIdAndUpdate(id, updatedSensorData, { new: true }); // Find and update, returning the updated document
    return result;
  } catch (error) {
    console.error("Error updating sensor data in DB:", error);
    throw new Error("Error updating sensor data");
  }
};

export const SensorServices = {
  getSensorDataFromDB,
  createSensorDataInDB,
  deleteSensorDataFromDB,
  updateSensorDataInDB,
};
