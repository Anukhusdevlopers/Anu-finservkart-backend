const Contact = require('../models/Contact'); // Adjust the path if needed

// Add Contact
const addContact = async (req, res) => {
  const { country, state, name, phone, email, subject, message } = req.body;

  try {
    // Create a new contact
    const newContact = await Contact.create({
      country,
      state,
      name,
      phone,
      email,
      subject,
      message,
    });

    res.status(201).json({
      message: 'Contact added successfully!',
      data: newContact,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error while adding contact',
      error: error.message,
    });
  }
};

module.exports = {
  addContact,
};
