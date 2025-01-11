require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./src/db/dbconnection'); // Sequelize instance
const customerRouter = require('./src/modules/routers/customerRoute');
const services =require('./src/modules/routers/serviceRouter')
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Routers
app.use(customerRouter);
app.use(services);
// Start server
const PORT = process.env.PORT || 6000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Failed to connect to the database:', error);
  });
