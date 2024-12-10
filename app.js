/// app.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { CustomerRouter }  from './modules/customer/customer.router.js';
import { TreeRouter } from './modules/tree/tree.router.js';
import { SensorRouter } from './modules/sensordata/sensor.router.js';
// import { CustomerRouter } from './modules/customer/customer.router.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// Middleware to parse JSON request body
app.use(express.json());

// Mount the customer routes
app.use('/api/customers',CustomerRouter);
app.use('/api/trees',TreeRouter);
app.use('/api/sensors',SensorRouter);


// Routing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
