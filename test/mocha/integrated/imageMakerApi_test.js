var server = require('../../../lib');
var should = require('should');

//starting server
server.startServer();

describe('ping.html:', function() {
    describe('validation', function() {
        it('valid input', function(done) {
            server.testInject('/imagemaker/ping.html?a=12', function(res) {
                res.statusCode.should.equal(200);
                done();
            });
        });

        it('invalid a input', function(done) {
            server.testInject('/imagemaker/ping.html?a=test', function(res) {
                res.statusCode.should.equal(400);
                done();
            });
        });

        it('extra input parameter', function(done) {
            server.testInject('/imagemaker/ping.html?a=12&a=13', function(res) {
                res.statusCode.should.equal(400);
                done();
            });
        });

        it('no input parameter', function(done) {
            server.testInject('/imagemaker/ping.html', function(res) {
                res.statusCode.should.equal(400);
                done();
            });
        });
    });
});
