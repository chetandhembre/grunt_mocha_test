var validator = require('./validator');
var imageMakerValidator = validator.imageMakerValidator;
var config = {
    ping: {
        handler: function(request, reply) {
            reply('ping');
        },
        validate: imageMakerValidator.ping
    }
};
exports.config = config;
