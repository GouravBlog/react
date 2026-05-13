import * as yup from 'yup';

export const formValidation = yup.object({
    fullname: yup.string().required("Full name is required").trim("No leading or trailing spaces allowed"),
    email: yup.string().required(),
    password: yup.string().min(5).max(15).required()
});