const express = require('express');
const path = require('path');
const helmet = require("helmet");

require('dotenv').config()

//Gestion des tables par sequelize
const sequelizeDb = require('./database/sequelize');
const user = require('./models/user-model');
const post = require('./models/post-model');
const comment = require('./models/comment-model');

//Gestion des routes
const userRoutes = require('./routes/user-route');
const postRoutes = require('./routes/post-route');
const commentRoutes = require('./routes/comment-route');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(helmet());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

module.exports = app;
