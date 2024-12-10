import { CustomerServices } from './customer.service.js'; // Ensure the correct path and .js extension


// GET: Fetch all customers
const getCustomer = async (req, res) => {
  try {
    const result = await CustomerServices.getCustomersFromDB();
    res.status(200).send(result); // Send customers with success status
  } catch (error) {
    res.status(500).send({ message: 'Error fetching customers', error });
  }
};

// POST: Add a new customer
const inputCustomer = async (req, res) => {
  try {
    console.log(req.body);
    const result = await CustomerServices.createCustomerInDB(req.body);
    
    res.status(201).send(result); // Send created customer with success status
  } catch (error) {
    res.status(500).send({ message: 'Error creating customer', error });
  }
};

// DELETE: Remove a customer by ID
const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params; // Extract customer ID from request params
    const result = await CustomerServices.deleteCustomerFromDB(id);
    if (!result) {
      return res.status(404).send({ message: 'Customer not found' });
    }
    res.status(200).send({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting customer', error });
  }
};

// PUT: Update a customer's details
const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await CustomerServices.updateCustomerInDB(id, updatedData);
    if (!result) {
      return res.status(404).send({ message: 'Customer not found' });
    }
    res.status(200).send(result); // Send updated customer
  } catch (error) {
    res.status(500).send({ message: 'Error updating customer', error });
  }
};

export const CustomerControllers = {
  getCustomer,
  inputCustomer,
  deleteCustomer,
  updateCustomer,
};
