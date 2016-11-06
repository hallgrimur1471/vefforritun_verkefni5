var express = require('express');
var router = express.Router();
const axios = require('axios');

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

  calculations(textboxInput)
    .then((result) => {
      res.render('results', {
        title: 'Niðurstöður margföldunnar',
        input: '1 2 3 a 4',
        foundNumbers: '1 2 3 4',
        multiplicationResults: '24',
        factors: '1 2 3 4 6 8 12 24'
      });
    })
    .catch((error) => {
      console.log(error);
      res.render('error', {title: 'Oh no!', error});
    });
});

function calculations(textboxInput) {
  const numbers = multiplier.splitIntoNumbers(textboxInput);
  const mult = multiplier.multiply(numbers);
  const factors = multiplier.factorize(mult);

  var calcResults = {
    input: textboxInput,
    foundNumbersText: foundNumbersText,
    foundNumbers: numbers.toString(),
    multiplicationResults: mult.toString(),
    factors: factors.toString(),
  }

  return calcResults;
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