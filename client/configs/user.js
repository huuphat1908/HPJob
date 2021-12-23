import * as yup from 'yup';

const userSchema = yup.object({
    username: yup.string().required().min(5),
    email: yup.string().required().email(),
    phoneNumber: yup.string().length(10),
    jobTitle: yup.string(),
    coverLetter: yup.string(),
    portfolio: yup.string()
});

export default userSchema;