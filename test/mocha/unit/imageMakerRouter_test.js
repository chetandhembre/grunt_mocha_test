'use strict';

var unit = require('./');
var should = require('should');

var router = unit.router;
var route = router.imageMakerRouter();

describe('test router file:', function() {
    it('image maker router should be of type Array', function() {
        route.should.be.an.Array;
    });
});
