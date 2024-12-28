const { DataTypes } = require('sequelize');
const sequelize = require('../../db/dbconnection'); // Apne Sequelize connection ka path adjust karein

const Contact = sequelize.define('Contact', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  subject: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  message: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  regDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false, // Agar `createdAt` aur `updatedAt` nahi chahiye
  tableName: 'contact', // Ensure this matches your database table name
});

module.exports = Contact;
