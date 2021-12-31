const { sequelize, DataTypes } = require('sequelize');
const sequelizeDb = require('../database/sequelize');

const comment = require('./comment-model');

//Création de la table posts
const post = sequelizeDb.define('post', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

//un post peut avoir plusieurs commentaires
post.hasMany(comment, {
    foreignKey: 'post_id', // clé étrangère de post dans la table comments
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
comment.belongsTo(post, { foreignKey: 'post_id' });//un commentaire est lié par un seul post

module.exports = post;