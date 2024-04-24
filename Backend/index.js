var express = require('express');
var fs = require('fs');
var router = express.Router();
const loggedIn = require('../Backend/controllers/loggedIn')

router.get('/', loggedIn, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;