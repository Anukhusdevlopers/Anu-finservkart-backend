const Customer = require('../models/Customer');

// Signup function
const signup = async (req, res) => {
  const { fname, lname, email, phone, password, referral } = req.body;

  try {
    // Check if the email is already registered
    const existingCustomer = await Customer.findOne({ where: { email } });
    if (existingCustomer) {
      return res.status(400).json({ message: 'Email already registered!' });
    }

    // Create a new customer with plain text password
    const newCustomer = await Customer.create({
      fname,
      lname,
      email,
      phone,
      password, // Storing the password as plain text
      referral,
    });

    res.status(201).json({ message: 'User registered successfully!', data: newCustomer });
  } catch (error) {
    res.status(500).json({ message: 'Error during signup', error: error.message });
  }
};

// Login function
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const customer = await Customer.findOne({ where: { email } });

    if (!customer) {
      return res.status(404).json({ message: 'User not found!' });
    }

    // Compare the entered password with the stored password
    if (password !== customer.password) {
      return res.status(401).json({ message: 'Invalid credentials!' });
    }

    res.status(200).json({ message: 'Login successful!', data: customer });
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error: error.message });
  }
};
// Update bank details for a specific customer
const updateBankDetails = async (req, res) => {
  const { id } = req.params; // Extract customer ID from URL
  const { IFSC, bank, branch, ACNo } = req.body; // Extract bank details from request body

  try {
    // Check if the customer exists
    const customer = await Customer.findByPk(id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found!' });
    }

    // Update the customer's bank details
    customer.IFSC = IFSC || customer.IFSC;
    customer.bank = bank || customer.bank;
    customer.branch = branch || customer.branch;
    customer.ACNo = ACNo || customer.ACNo;

    // Save the updated details
    await customer.save();

    res.status(200).json({ message: 'Bank details updated successfully!', data: customer });
  } catch (error) {
    res.status(500).json({ message: 'Error updating bank details', error: error.message });
  }
};
// Reset Password
const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    // Check if customer with the given email exists
    const customer = await Customer.findOne({ where: { email } });

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found!' });
    }

    // Update the password
    customer.password = newPassword; // Ensure password hashing is implemented in a real scenario
    await customer.save();

    res.status(200).json({ message: 'Password reset successfully!' });
  } catch (error) {
    res.status(500).json({
      message: 'Error while resetting password',
      error: error.message,
    });
  }
};



module.exports = { signup, login,updateBankDetails ,resetPassword};
