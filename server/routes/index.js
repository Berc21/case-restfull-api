var express = require('express');
var router = express.Router();
const Shop = require('../models/Shop');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
