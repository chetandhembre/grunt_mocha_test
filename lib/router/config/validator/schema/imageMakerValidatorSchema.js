var Hapi = require('hapi');
var N = Hapi.types.number;

var createSchema = function(validation, options) {
    return Hapi.types.object(validation).options(options);
};

var validation = {
    ping: {
        a: N().required()
    }
};

var options = {
    ping: {
        abortEarly: false
    }
};

var schema = {
    ping: createSchema(validation.ping, options.ping)
};



exports.schema = schema;
