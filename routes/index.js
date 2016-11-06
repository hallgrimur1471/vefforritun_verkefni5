var express = require('express');
var router = express.Router();
const axios = require('axios');
const fs = require('fs');

var multiplier = require('../src/multiplier.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Margföldunarvélin' });
});

/* GET results. */
router.post('/', function(req, res, next) {
  const textboxInput = req.body.multiplicationbox;
  console.log(textboxInput);
  console.log(multiplier.multiply([4, 4]));

  calculations(textboxInput, (result) => {
      console.log(result.foundNumbers)
      console.log(result.foundNumbers === [])
      res.render('results', {
        title: 'Niðurstöður margföldunnar',
        input: result.textboxInput,
        foundNumbers: result.foundNumbers,
        multiplicationResults: result.multiplicationResults,
        factors: result.factors
      });
    });
});

function calculations(textboxInput, callback) {
  const numbers = multiplier.splitIntoNumbers(textboxInput);
  const mult = multiplier.multiply(numbers);
  const factors = multiplier.factorize(mult);

  var calcResults = {
    textboxInput,
    foundNumbers: numbers,
    multiplicationResults: mult.toString(),
    factors: factors.toString(),
  };

  callback(calcResults);
}

module.exports = router;





  //concerts()
  //  .then((result) => {
  //    console.log(result);
  //    res.render('index', { title: 'Tónleikar', concerts: result.data.results });
  //  })
  //  .catch((error) => {
  //    console.log(error);
  //    res.render('error', { title: 'Oh no!', error });      
  //  });