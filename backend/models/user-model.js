const { sequelize, DataTypes } = require('sequelize');
const sequelizeDb = require('../database/sequelize');

//const {isEmail} = require('validator')

const post = require('./post-model');
const comment = require('./comment-model');

//Création de la table users
const user = sequelizeDb.define('user', {
    id: {
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

//un utilisateur peut faire plusieurs posts
user.hasMany(post, {
    foreignKey: 'user_id', // clé étrangère dans la table post
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
post.belongsTo(user, { foreignKey: 'user_id' });//un post est conçu par un seul utilisateur

//un utilisateur peut faire plusieurs commentaires
user.hasMany(comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
comment.belongsTo(user, { foreignKey: 'user_id' });//un post est conçu par un seul utilisateur

module.exports = user;