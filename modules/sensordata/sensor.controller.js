import { SensorServices } from "./sensor.service.js";

const getSensorData = async (req, res) => {
  try {
    const result = await SensorServices.getSensorDataFromDB();
    res.status(200).send(result);
  } catch (error) {
    console.error("Error fetching sensor data:", error);
    res.status(500).send("Error fetching sensor data");
  }
};

const createSensorData = async (req, res) => {
  const { customerId, manualControl, manualDuration, sensorData, soilMoisture } = req.body;

  try {
    // Ensure required fields are provided
    if (!customerId  || manualControl === undefined ||  !sensorData || !soilMoisture) {
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

export const SensorControllers = {
  getSensorData,
  createSensorData,
};