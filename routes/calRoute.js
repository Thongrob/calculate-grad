const express = require('express');
const rounter = express.Router();
const {calScore}      = require('../controllers/calController');

rounter.post('/', calScore)

module.exports = rounter