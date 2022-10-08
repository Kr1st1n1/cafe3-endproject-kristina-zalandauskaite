import React from 'react';
import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import * as yup from 'yup';
import moment from 'moment';
import { useFormik } from 'formik';
import AuthForm from '../../components/auth-form';

const dateNow = moment(new Date());

const initialValues = {
  email: '',
  emailConfirmation: '',
  password: '',
  passwordConfirmation: '',
  fullname: '',
  birthdate: dateNow,
};

const validationSchema = yup.object({
  email: yup.string()
    .required('Required')
    .email('Invalid email format'),
  emailConfirmation: yup.string()
    .required('Required')
    .oneOf([yup.ref('email')], 'e-mails do not match'),
  password: yup.string()
    .required('Required')
    .min(8, 'At least 8 characters required')
    .matches(/[a-z]/, 'At least one lowercase letter is required')
    .matches(/[A-Z]/, 'At least one capital letter is required')
    .matches(/\d/, 'At least one number is required')
    .matches(/\W/, 'At least one special character is required'),
  passwordConfirmation: yup.string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  fullname: yup.string()
    .required('Required')
    .min(6, 'At least 6 characters required')
    .matches(/^[a-ząčęėįšųūž ]+$/i, 'Can only contain letters and spaces'),
  birthdate: yup.date('Invalid date format, please provide format')
    .max(dateNow, 'Cannot choose a future time'),
});

const RegisterPage = () => {
  const onSubmit = (values) => {
    console.log('įvestos reikšmės');
    console.log(values);
  };

  const {
    values, errors, touched, dirty, isValid,
    handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <AuthForm
      title="Registration"
      btnText="Registration"
      onSubmit={handleSubmit}
      disabled={!dirty || !isValid}
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
        name="emailConfirmation"
        label="Email confirmation"
        type="email"
        variant="filled"
        fullWidth
        value={values.emailConfirmation}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.emailConfirmation && Boolean(errors.emailConfirmation)}
        helperText={touched.emailConfirmation && errors.emailConfirmation}
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        variant="filled"
        fullWidth
        onChange={handleChange}
        value={values.password}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      <TextField
        name="passwordConfirmation"
        label="Password confirmation"
        type="password"
        variant="filled"
        fullWidth
        value={values.passwordConfirmation}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
        helperText={touched.passwordConfirmation && errors.passwordConfirmation}
      />
      <TextField
        name="fullname"
        label="Name and Surname"
        type="text"
        variant="filled"
        fullWidth
        value={values.fullname}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.fullname && Boolean(errors.fullname)}
        helperText={touched.fullname && errors.fullname}
      />
      <DesktopDatePicker
        inputFormat="yyyy-MM-DD"
        disableMaskedInput
        value={values.birthdate}
        disableFuture
        onChange={(momentInstance) => {
          if (momentInstance.isValid) {
            setFieldTouched('birthdate', true, false);
            setFieldValue('birthdate', momentInstance, true);
          }
        }}
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            name="birthdate"
            label="date of birth"
            variant="filled"
            fullWidth
            onBlur={handleBlur}
            error={touched.birthdate && Boolean(errors.birthdate)}
            helperText={touched.birthdate && errors.birthdate}
          />
        )}
      />
    </AuthForm>
  );
};

export default RegisterPage;
