// controllers/ServiceController.js
const Service = require('../models/Services');
const Customer = require('../models/Customer');  // Assuming you have a Customer model
const upload = require('../../multer/index');

// Create service with file upload (only service_image)
const createService = async (req, res) => {
  try {
    // Handle file upload (only service_image)
    upload.single('service_image')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      const { service_name, service_price, govt_fees, percentage, total_amt, commission, terms, cid, required_documents } = req.body;

      // Validate if customer exists with the given cid
      const customer = await Customer.findOne({ where: { id: cid } });
      if (!customer) {
        return res.status(400).json({ error: 'Customer not found with the given cid.' });
      }

      // Prepare data for the new service
      const serviceData = {
        service_name,
        service_image: req.file ? req.file.path : null,  // Save the file path
        required_documents,  // Store as text
        service_price,
        govt_fees,
        percentage,
        total_amt,
        commission,
        terms,
        cid,  // Foreign key to customer
      };

      // Create the new service in the database
      const newService = await Service.create(serviceData);

      return res.status(201).json({ message: 'Service created successfully', service: newService });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while creating the service.' });
  }
};

module.exports = { createService };
