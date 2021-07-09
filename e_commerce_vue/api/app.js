const express = require('express');
const app = express();
const cors = require('cors');

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// INPORT CONTROLLERS
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');

// CONTROLLERS
app.use('/api/products', productController);
app.use('/api/user', userController);

module.exports = app;