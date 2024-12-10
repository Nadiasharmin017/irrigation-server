/// app.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { CustomerRouter }  from './modules/customer/customer.router.js';
// import { CustomerRouter } from './modules/customer/customer.router.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// Middleware to parse JSON request body
app.use(express.json());

// Mount the customer routes
app.use('/api/customers',CustomerRouter);

// Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// Initialize app and middleware

// Routing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
