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
    return await Customer.findByIdAndUpdate(id, updatedData, { new: true });
  } catch (error) {
    throw new Error('Error updating customer');
  }
};

// DELETE: Remove a customer from the database
const deleteCustomerFromDB = async (id) => {
  try {
    return await Customer.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting customer');
  }
};

export const CustomerServices = {
  getCustomersFromDB,
  createCustomerInDB,
  updateCustomerInDB,
  deleteCustomerFromDB,
};
