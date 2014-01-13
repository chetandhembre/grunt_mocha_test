'use strict';
var unit = require('./');
var schema = unit.schema;
var should = require('should');

var imageMakerValidatorSchema = schema.imageMakerValidatorSchema;

describe('test schema', function() {
    it('return hapi type object', function() {
        imageMakerValidatorSchema.should.be.type('object');
    });
});
