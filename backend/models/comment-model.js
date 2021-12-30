const sequelizeDb = require('../database/sequelize');
const { sequelize, DataTypes } = require('sequelize');

const comment = sequelizeDb.define('comment', {

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
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    post_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
});

module.exports = comment;