/**
 * Splits a string into numbers based on separator, can be " ", "," or ";"
 *
 * @param {string} values - values to split
 * @returns {array} - Array of results, empty if no numbers found
 */
function splitIntoNumbers(values) {
  let str = values.split(/[, ]/);
  str = str.filter(v => v !== '');
  const numbers = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/^-?\d+$/m)) {
      numbers.push(Number(str[i]));
    }
  }
  return numbers;
}

/**
 * Multiplies all numbers in given array and returns.
 *
 * @param {array} values - values to multiply
 * @returns {number|null} - Result of multiplication or null if input not array
 */
function multiply(values) {
  let mult = 1;
  if (values.length < 2) {
    return [];
  }
  for (let i = 0; i < values.length; i++) {
    mult *= values[i];
  }
  return mult;
}

/**
 * Factorize a given number into its factors
 *
 * @param {number} values - value to factorize
 * @returns {array} - Result of factorization or empty array if unable to
 */
function factorize(n) {
  const factors = [];
  if ((n <= 0) || (n % 1 !== 0)) {
    return [];
  }
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  factors.push(n);
  return factors;
}

module.exports = {
  splitIntoNumbers,
  multiply,
  factorize,
};
