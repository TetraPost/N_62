const express = require('express');
const routes = express.Router();

routes.all('/', function(req, res, next) {
  res.render('index');
});

module.exports = routes;
