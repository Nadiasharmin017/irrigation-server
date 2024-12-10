import express from 'express';
import { CustomerControllers } from './customer.controller.js';

const router = express.Router();

// GET all customers
router.get('/', CustomerControllers.getCustomer);

// POST a new customer
router.post('/addcustomer', CustomerControllers.inputCustomer);

// router.post('/addcustomer', () => {console.log("fffff")});
// PUT: Update a customer by ID
router.put('/:id', CustomerControllers.updateCustomer);

// DELETE: Remove a customer by ID
router.delete('/:id', CustomerControllers.deleteCustomer);

export const CustomerRouter = router;
