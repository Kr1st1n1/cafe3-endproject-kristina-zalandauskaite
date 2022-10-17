import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import App from './app';
import theme from './styles/theme';
import { AuthProvider } from './store/auth/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <AuthProvider>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </AuthProvider>,
  // </React.StrictMode>,
);
