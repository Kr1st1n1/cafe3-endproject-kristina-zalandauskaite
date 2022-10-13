import React from 'react';
import { TextField, Box, Container } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthForm from '../../components/auth-form';
import BgImage from '../../assets/flowers.jpg';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup.string()
    .required('Privaloma')
    .email('Neteisingas el. pašto formatas'),
  password: yup.string()
    .required('Privaloma')
    .min(8, 'Mažiausiai 8 simboliai')
    .matches(/[a-z]/, 'Bent viena mažoji raidė')
    .matches(/[A-Z]/, 'Bent viena didžioji raidė')
    .matches(/\d/, 'Bent vienas skaičius')
    .matches(/\W/, 'Bent vienas specialus simbolis'),
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
        <Box height="90vh" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
