const express = require('express');
const router = express.Router();

const Shop = require('../models/Shop');

router.get('/', function (req, res, next) {
  let perPage = 5;
  let page = parseInt(req.query.page) || 0;
  let pages = 0;
  let nextUrl = '';
  let prevUrl = '';
  Shop.count().exec(function (err, count) {
    Shop.find()
      .limit(perPage)
      .skip(perPage * page)
      .exec(function (err, shops) {
        pages = Math.floor(count / perPage);
        if (page === 0) {
          res.json({
            shops,
            currentPage: page,
            pages,
            count,
            prevUrl: ``,
            nextUrl: `http://localhost:3000/shops?page=${page + 1}`
          })

        } else if (page === pages - 1) {
          res.json({
            shops: shops,
            currentPage: page,
            pages,
            count,
            prevUrl: `http://localhost:3000/shops?page=${page - 1}`,
            nextUrl: ``
          })
        } else if (page > 0 && page < pages) {
          res.json({
            shops: shops,
            currentPage: page,
            pages,
            count,
            prevUrl: `http://localhost:3000/shops?page=${page - 1}`,
            nextUrl: `http://localhost:3000/shops?page=${page + 1}`
          })
        }else {
          res.redirect('/shops')
        }

      });
  });
});

router.get('/:id', function (req, res, next) {
  Shop.findById(req.params.id, function (err, shop) {
    if (err) return console.log(err);
    res.status(200).json(shop);
  })
});

module.exports = router;
