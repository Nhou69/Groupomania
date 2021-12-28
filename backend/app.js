const express = require('express');
const sequelize= require('sequelize');
const path = require('path');
const helmet = require("helmet");

require('dotenv').config()

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

module.exports = app;