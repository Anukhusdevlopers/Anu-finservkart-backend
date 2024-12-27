const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./src/db/dbconnection'); // Ensure this path is correct



const cors = require("cors");
// Load environment variables from .env file
require('dotenv').config();
// Create an instance of Express
const app = express();
app.use(bodyParser.json());


// CORS setup
const corsOptions = {
  origin: '*', // Adjust as needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

app.use(cors()); // Enable 
app.use(cors({
  origin: 'http://localhost:3000', // Change this to your frontend URL
  credentials: true
}));
app.use(express.json());


const customerRouter = require('./src/modules/routers/customerRoute'); // Adjust path if necessary
app.use( customerRouter);




const PORT = process.env.PORT || 6000;

// Sync database and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Failed to connect to the database:', error);
});
