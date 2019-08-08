const Joi = require('@hapi/joi');
const validateId = Joi.object().keys({
    id: Joi.number().integer()
});

module.exports = validateId;