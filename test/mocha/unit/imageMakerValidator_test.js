'use strict';

var unit = require('./');
var validator = unit.validator;
var should = require('should');

var imageMakerValidator = validator.imageMakerValidator;

describe('test validator', function() {
    it('image maker validator should be of type object', function() {
        imageMakerValidator.should.be.type('object');
    });;
});
