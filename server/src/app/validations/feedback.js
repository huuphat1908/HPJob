import Joi from 'joi';

const feedbackValidationSchema = Joi.object({
    content: Joi.array().min(1).items(
        Joi.object().keys({
            sender: Joi.string(),
            contentSender: Joi.string()
        })
    )
}) 

export default feedbackValidationSchema;