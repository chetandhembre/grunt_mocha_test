var config = require('./config');
var imageMakerConfig = config.imageMakerConfig;
var COMMON_PART = '/imagemaker';

var route = [{
    "method": "GET",
    "path": COMMON_PART + "/ping.html",
    "config": imageMakerConfig.ping
}];

var router = function() {
    return route;
};
exports.route = router;
