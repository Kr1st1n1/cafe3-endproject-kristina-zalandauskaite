import React from 'react';
import {
  Paper,
  Box,
  Typography,
  Button,
} from '@mui/material';

const AuthForm = ({
  title,
  btnText,
  disabled = false,
  onSubmit,
  children,
}) => (
  <Paper elevation={3} sx={{ p: 5, width: 400 }}>
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
      }}
      onSubmit={onSubmit}
    >

      <Typography component="h1" variant="h5">{title}</Typography>
      {children}
      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={disabled}
      >
        {btnText}
      </Button>
    </Box>
  </Paper>
);

export default AuthForm;
