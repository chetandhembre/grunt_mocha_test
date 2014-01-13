var server = require('./server');
exports.startServer = function() {
    server.start();
};

exports.testInject = function(url, callback) {
    server.testInject(url, callback);
};
