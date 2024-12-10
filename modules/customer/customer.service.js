import mongoose from 'mongoose';
import { Customer } from './customer.model.js'; // Again, ensure the correct path


// GET: Fetch all customers from the database
const getCustomersFromDB = async () => {
  try {
    return await Customer.find();
  } catch (error) {
    throw new Error('Error fetching customers');
  }
};

// POST: Add a new customer to the database
const createCustomerInDB = async (customerData) => {  
  try {
    console.log(customerData);
    const newCustomer = new Customer(customerData);
    const result =  await newCustomer.save();
    
    return result;
  } catch (error) {
    throw new Error('Error creating customer');
  }
};

// PUT: Update an existing customer's data
const updateCustomerInDB = async (id, updatedData) => {
  try {
    
    const objectId = new mongoose.Types.ObjectId(id);
    
    return await Customer.findByIdAndUpdate(objectId, updatedData, { new: true });
  } catch (error) {
    throw new Error('Error updating customer');
  }
};

// DELETE: Remove a customer from the database
const deleteCustomerFromDB = async (id) => {
  try {
    // Convert string id to ObjectId (to work with MongoDB's default _id field)
    const objectId = new mongoose.Types.ObjectId(id);

    // Use `findByIdAndDelete` to delete the customer by ObjectId (_id field)
    const deletedCustomer = await Customer.findByIdAndDelete(objectId);

    // Return the deleted customer, or null if not found
    return deletedCustomer;
  } catch (error) {
    console.error("Error in deleteCustomerById:", error);
    throw error; // Rethrow error to be handled by the controller
  }
};


export const CustomerServices = {
  getCustomersFromDB,
  createCustomerInDB,
  updateCustomerInDB,
  deleteCustomerFromDB,
};
