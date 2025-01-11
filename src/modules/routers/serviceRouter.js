// routes/serviceRoutes.js
const express = require("express");
const router = express.Router();
const serviceController = require("../controllers.js/ServicesController");

// CRUD Routes for services

router.post("/add-service", serviceController.createService);


module.exports = router;
