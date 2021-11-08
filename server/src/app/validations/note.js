import Joi from 'joi';

const noteValidationSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string(),
    label: Joi.string().max(30).required(),
    alarm: Joi.date().greater('now'),
    isInTrash: Joi.boolean(),
    isInArchive: Joi.boolean(),
    isLock: Joi.boolean(),
    password: Joi.string().min(6).max(30).alphanum(),
    color: Joi.string()
}) 

export default noteValidationSchema;