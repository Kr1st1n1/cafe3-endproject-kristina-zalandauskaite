import React from 'react';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthForm from '../../components/auth-form';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup.string()
    .required('Required')
    .email('Invalid email format'),
  password: yup.string()
    .required('Required')
    .min(8, 'At least 8 characters required')
    .matches(/[a-z]/, 'At least one lowercase letter is required')
    .matches(/[A-Z]/, 'At least one capital letter is required')
    .matches(/\d/, 'At least one number is required')
    .matches(/\W/, 'At least one special character is required'),
});

const LoginPage = () => {
  const onSubmit = async (values) => {
    console.log('Forma patvirtinta, atliekami veiksmai...');
    console.log(values);
  };

  const {
    dirty, values, errors, touched, isValid,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <AuthForm
      title="SIGN IN"
      onSubmit={handleSubmit}
      disabled={!dirty || !isValid}
      btnText="Sign in"
    >
      <TextField
        name="email"
        label="E-mail"
        type="email"
        variant="filled"
        fullWidth
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        variant="filled"
        fullWidth
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
    </AuthForm>
  );
};

export default LoginPage;
