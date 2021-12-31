const { sequelize, DataTypes } = require('sequelize');
const sequelizeDb = require('../database/sequelize');

//Création de la table comments
const comment = sequelizeDb.define('comment', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = comment;