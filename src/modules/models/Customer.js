const { DataTypes } = require('sequelize');
const sequelize = require('../../db/dbconnection'); // Adjust if the path is different

const Customer = sequelize.define('Customer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  CustID: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  fname: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  lname: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  referral: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  regDate: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  CProfile: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  fb: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  insta: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  linkedin: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  twitter: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  whatsapp: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  IFSE: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  bank: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  branch: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  ACNo: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
}, {
    timestamps: false, // Disable createdAt and updatedAt

  tableName: 'customer', // Ensure this matches your database table name
});

module.exports = Customer;
