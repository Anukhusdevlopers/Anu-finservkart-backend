// models/Service.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/dbconnection');

const Service = sequelize.define('Service', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  service_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  service_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  required_documents: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  service_price: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  govt_fees: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  percentage: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  total_amt: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  commission: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  terms: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  cid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Customers', // Referencing the `Customer` model
      key: 'id',           // Foreign key pointing to `id` of the `Customers` table
    },
    onDelete: 'CASCADE',  // Automatically delete services if the associated customer is deleted
    onUpdate: 'CASCADE',  // Update the foreign key if the `Customer` id changes
  },
}, {
  tableName: 'services',  // Specify the table name
  timestamps: false,      // Disable timestamps (if not used)
});

// Association with the Customer model
Service.associate = (models) => {
  Service.belongsTo(models.Customer, {
    foreignKey: 'cid',  // The column that holds the foreign key reference
    onDelete: 'CASCADE', // Ensures that when a customer is deleted, their services are deleted too
    onUpdate: 'CASCADE', // Ensures that when the customer ID is updated, the services update accordingly
  });
};

module.exports = Service;
