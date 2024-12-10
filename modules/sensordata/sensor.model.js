import mongoose from 'mongoose';

const sensorSchema = new mongoose.Schema({
  customerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Customer', 
    required: true 
  }, // Reference to Customer
  manualControl: { type: Boolean, required: true }, // Manual control status
  manualDuration: { type: Number, required: true }, // Duration in seconds
  sensorData: { type: Number, required: true }, // Sensor data reading
  soilMoisture: { type: Number, required: true }, // Soil moisture percentage
}, { timestamps: true }); // Includes createdAt and updatedAt

const Sensor = mongoose.model('sensor', sensorSchema);

export default Sensor;