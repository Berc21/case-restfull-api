const express = require('express');
const router = express.Router();

const Campaign = require('../models/Campaign');

router.get('/', function (req, res, next) {
    Campaign.find(function (err, campaigns) {
        if (err) return console.log(err);
        res.status(200).json(campaigns);
    });
    
});

module.exports = router;
