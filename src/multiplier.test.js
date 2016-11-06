const chai = require('chai');
const multiplier = require('./multiplier');

const should = chai.should();

describe('splitIntoNumbers', () => {
	it('should split `numbers only` to numbers', () => {
		multiplier.splitIntoNumbers('-1, 2, 1').should.eql([-1, 2, 1]);
	});
	it('should split `mixed numbers and characters` to numbers', () => {
		multiplier.splitIntoNumbers('a, 1, -1').should.eql([1, -1]);
	});
	it('should split `only characters` to []', () => {
		multiplier.splitIntoNumbers('a, b').should.eql([]);
	});
	it('should split `numbers with many commas and spaces` to numbers', () => {
		multiplier.splitIntoNumbers('  ,  1, 2  , ,  4 , ').should.eql([1, 2, 4]);
	});
});

describe('multiply', () => {
	it('should multiply more than two numbers', () => {
		multiplier.multiply([1, 2, 3, 4, 5, 6]).should.equal(720);
	});
	it('should multiply two numbers', () => {
		multiplier.multiply([1, 2]).should.equal(2);
	});
	it('should not multiply one number', () => {
		multiplier.multiply([2]).should.eql([]);
	});
	it('should not multiply []', () => {
		multiplier.multiply([]).should.eql([]);
	});
});

describe('factorize', () => {
	it('should factorize 15', () => {
		multiplier.factorize(15).should.eql([1, 3, 5, 15]);
	});
	it('should factorize 6', () => {
		multiplier.factorize(6).should.eql([1, 2, 3, 6]);
	});
	it('should factorize a prime', () => {
		multiplier.factorize(7).should.eql([1, 7]);
	});
	it('should factorize 2', () => {
		multiplier.factorize(2).should.eql([1, 2]);
	});
	it('should factorize 1', () => {
		multiplier.factorize(1).should.eql([1]);
	});
	it('should return [] for float numbers', () => {
		multiplier.factorize(6.02).should.eql([]);
	});
	it('should return [] for 0', () => {
		multiplier.factorize(0).should.eql([]);
	});
	it('should return [] for negative numbers', () => {
		multiplier.factorize(-6).should.eql([]);
	});
	it('should return [] for characters', () => {
		multiplier.factorize('a').should.eql([]);
	});
});
  