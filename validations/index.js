import * as yup from 'yup';

const loginValidation = yup.object({
   email: yup.string().email('Invalid Email').required("Can't be empty"),
   password: yup
      .string()
      .min(6, 'Password  must be at least 6 characters long')
      .required("Can't be empty"),
});

const registerValidation = yup.object({
   firstName: yup
      .string()
      .max(15, 'First name should not be greater than 15 characters')
      .required("Can't be empty"),
   lastName: yup
      .string()
      .max(20, 'Last name should not be greater than 20 characters')
      .required("Can't be empty"),
   email: yup.string().email('Invalid Email').required("Can't be empty"),
   password: yup
      .string()
      .min(6, 'Password  must be at least 6 characters long')
      .required("Can't be empty"),
   confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Password must match')
      .required("Can't be empty"),
});

export { loginValidation, registerValidation };
