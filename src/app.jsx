import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import PageRoutes from './pages/routes/page-routes';
import { CartProvider } from './contexts/cart-context';

const App = () => (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <BrowserRouter>
      <CartProvider>
        <PageRoutes />
      </CartProvider>
    </BrowserRouter>
  </LocalizationProvider>
);

export default App;
