import React from 'react';
import {
  TextField, Box, Container, Alert,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSearchParams } from 'react-router-dom';
import {
  authClearErrorsAction,
  createLoginThunkAction,
} from '../../store/auth/auth-actions';
import AuthForm from '../../components/auth-form';
import useAuth from '../../hooks/useAuth';
import BgImage from '../../assets/flowers.jpg';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup.string()
    .required('Privaloma')
    .email('Neteisingas el. pašto formatas'),
});

const LoginPage = () => {
  const { error, dispatch } = useAuth();
  const [serachParams] = useSearchParams();

  const onSubmitRef = React.useRef((credentials) => {
    const redirect = serachParams.get('redirect');
    dispatch(createLoginThunkAction(credentials, redirect));
    // eslint-disable-next-line no-use-before-define
    resetForm();
  });

  const {
    dirty, values, errors, touched, isValid,
    handleChange, handleBlur, handleSubmit, resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmitRef.current,
  });

  return (
    <Box sx={{
      backgroundImage: `url(${BgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'cover',
      minHeight: '100vh',
      width: '100%',
      opacity: 0.99,
      boxShadow: 'inset 120em 1em #211c1cbf',
    }}
    >
      <Container
        maxWidth="false"
        sx={{ maxWidth: 1400 }}
      >
        <Box
          height="90vh"
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
          }}
        >
          {error && (
          <Alert sx={{ mb: 5 }} severity="error" onClose={() => dispatch(authClearErrorsAction)}>
            {error}
          </Alert>
          )}
          <AuthForm
            title="Prisijungti"
            onSubmit={handleSubmit}
            disabled={!dirty || !isValid}
            btnText="Prisijungti"
          >
            <TextField
              name="email"
              label="E-paštas"
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
              label="Slaptažodis"
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
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
