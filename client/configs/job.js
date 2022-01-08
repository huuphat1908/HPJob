import * as yup from 'yup';

export const jobSchema = yup.object({
    title: yup.string().required(),
    type: yup.string().required(),
    city: yup.string().required(),
    description: yup.string().required(),
    minSalary: yup.number().required(),
    maxSalary: yup.number().required().moreThan(yup.ref('minSalary')),
});