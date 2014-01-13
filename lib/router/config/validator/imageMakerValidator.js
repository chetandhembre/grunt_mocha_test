var schema = require('./schema');

var imageMakerValidatorSchema = schema.imageMakerValidatorSchema;
//console.log(imageMakerValidatorSchema);
var validator = {
    ping: {
        query: imageMakerValidatorSchema.ping
    }
};


exports.imageMakerValidator = validator;
