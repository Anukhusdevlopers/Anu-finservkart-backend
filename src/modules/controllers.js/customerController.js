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

module.exports = { signup, login };
