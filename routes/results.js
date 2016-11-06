var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Margföldunarvélin' });
});

/* GET results. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Hello world2' });
});

module.exports = router;
