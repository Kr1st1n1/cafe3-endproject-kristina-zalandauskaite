import React from 'react';
import {
  Box,
  Container,
} from '@mui/material';
import List from './components/list';

const CartPage = () => (

  <Box sx={{ backgroundColor: 'common.light', minHeight: '100vh' }}>
    <Container maxWidth="false" sx={{ maxWidth: '1400px' }}>
      <Box sx={{
        pt: 3,
        pb: 2,
        px: { xs: 0, lg: 30 },
      }}
      >
        <List />
      </Box>
    </Container>
  </Box>

);

export default CartPage;
