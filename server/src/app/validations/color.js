import Joi from 'joi';

const colorValidationSchema = Joi.object({
    name: Joi.string().max(15),
    hexCode: Joi.string().length(7)
}) 

export default colorValidationSchema;