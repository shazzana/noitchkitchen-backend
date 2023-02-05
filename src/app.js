const express = require('express');
const cors = require('cors');

const app = express();

const index = require('./routers/index');
const ingredientRoute = require('./routers/ingredient-router');


app.use(express.urlencoded({ extended: true })); // Is this for typescript?
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' })); // Is this typescript too?
app.use(cors());

app.use(index);
app.use('/', ingredientRoute);

module.exports = app;