const express = require('express');
const { signup, login,updateBankDetails ,resetPassword} = require('../controllers.js/customerController');
const { addContact } = require('../controllers.js/ContactController'); // Adjust the path if needed

const router = express.Router();

// Signup route
router.post('/signup', signup);
router.post('/reset-password', resetPassword);

// Login route
router.post('/login', login);
router.put('/customers//bank-details/:id', updateBankDetails);
// POST Route to Add Contact
router.post('/add-contacts', addContact);
module.exports = router;
