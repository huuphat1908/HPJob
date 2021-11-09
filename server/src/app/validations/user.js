import Joi from 'joi';

const userValidationSchema = Joi.object({
    role: Joi.string().valid('user', 'admin'),
    username: Joi.string().alphanum().min(6).max(20),
    email: Joi.string().email({ tlds: false }),
    password: Joi.string(),
    label: Joi.array().items(
        Joi.object().keys({
            name: Joi.string(),
            color: Joi.string()
        })
    ),
    feedback: Joi.array().items(
        Joi.object().keys({
            feedbackId: Joi.string()
        })
    ),
    note: Joi.array().items(
        Joi.object().keys({
            noteId: Joi.string()
        })
    ),
}) 

export default userValidationSchema;