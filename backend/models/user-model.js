const sequelizeDb = require('../database/sequelize');
const { sequelize, DataTypes } = require('sequelize');

const user = sequelizeDb.define('user', {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = user;