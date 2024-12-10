import { SensorServices } from "./sensor.service.js";

// Fetch all sensor data
const getSensorData = async (req, res) => {
  try {
    const result = await SensorServices.getSensorDataFromDB();
    res.status(200).send(result);
  } catch (error) {
    console.error("Error fetching sensor data:", error);
    res.status(500).send("Error fetching sensor data");
  }
};

// Create new sensor data
const createSensorData = async (req, res) => {
  const { customerId, manualControl, manualDuration, sensorData, soilMoisture } = req.body;

  try {
    // Ensure required fields are provided
    if (!customerId || manualControl === undefined || !sensorData || !soilMoisture) {
      return res.status(400).send("Missing required fields");
    }

    // Prepare sensor data object
    const sensorDataObject = {
      customerId,
      manualControl,
      manualDuration,
      sensorData,
      soilMoisture,
    };

    // Call the service to save the data
    const result = await SensorServices.createSensorDataInDB(sensorDataObject);
    res.status(201).send("Sensor data created successfully");
  } catch (error) {
    console.error("Error creating sensor data:", error);
    res.status(500).send("Error creating sensor data");
  }
};

// Delete sensor data by ID
const deleteSensorData = async (req, res) => {
  try {
    const { id } = req.params; // Extract sensor data ID from the request params
    const result = await SensorServices.deleteSensorDataFromDB(id);

    if (!result) {
      return res.status(404).send({ message: 'Sensor data not found' });
    }

    res.status(200).send({ message: 'Sensor data deleted successfully' });
  } catch (error) {
    console.error("Error deleting sensor data:", error);
    res.status(500).send("Error deleting sensor data");
  }
};

// Update sensor data
const updateSensorData = async (req, res) => {
  const { id } = req.params; // Get sensor data ID from the params
  const { manualControl, manualDuration, sensorData, soilMoisture } = req.body;

  try {
    // Prepare updated data object
    const updatedSensorData = {
      manualControl,
      manualDuration,
      sensorData,
      soilMoisture,
    };

    const result = await SensorServices.updateSensorDataInDB(id, updatedSensorData);
    
    if (!result) {
      return res.status(404).send({ message: 'Sensor data not found' });
    }

    res.status(200).send({ message: 'Sensor data updated successfully', data: result });
  } catch (error) {
    console.error("Error updating sensor data:", error);
    res.status(500).send("Error updating sensor data");
  }
};

export const SensorControllers = {
  getSensorData,
  createSensorData,
  deleteSensorData,
  updateSensorData,
};
