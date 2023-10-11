const express = require('express');
const cors = require('cors');
const router = require('./routers/router-warehouses');
const app = express();
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/dev-data/public')));

app.use('/', router);

module.exports = app;
