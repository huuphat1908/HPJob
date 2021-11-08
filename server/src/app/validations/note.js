import Joi from 'joi';

const noteValidationSchema = Joi.object({
    title: Joi.string(),
    label: Joi.string().max(30)
}) 

export default noteValidationSchema;