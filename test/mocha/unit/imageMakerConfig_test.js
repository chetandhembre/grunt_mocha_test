'use strict';

var unit = require('./');
var config = unit.config;
var should = require('should');
var imageMakerConfig = config.imageMakerConfig;

describe('test config file ', function() {
    it('image maker config should be of type object', function() {
        imageMakerConfig.should.be.type('object');
    });
});
