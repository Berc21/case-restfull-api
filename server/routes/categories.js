const express = require('express');
const router = express.Router();

const Category = require('../models/Category');
const Shop = require('../models/Shop');

router.get('/', function (req, res, next) {
    Category.find(function (err, categories) {
        if (err) return console.log(err);
        res.status(200).json(categories);
    });
    
});
//display all products in a specific Category
router.get('/:category', function (req, res, next) {
    Category.findOne({title: req.params.category}, function (err, category) {
        Shop.find({category: category.title}, function(err, shops) {
            if(err) return console.log(err);
            res.status(200).json(shops);
        });
    });
});

module.exports = router;
