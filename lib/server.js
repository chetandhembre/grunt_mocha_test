var Hapi = require('hapi');
var router = require('./router');
var imageMakerRouter = router.imageMakerRouter();
var server;

exports.start = function() {
    // Create a server with a host, port, and options/*
    server = new Hapi.Server('localhost', 8080);
    // Add the route
    server.route(imageMakerRouter);
    server.start();
};

/**
 * this is testing purpose function
 * @param  {[type]}   url      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.testInject = function(url, callback) {
    server.inject(url, function(res) {
        callback(res);
    });
};
