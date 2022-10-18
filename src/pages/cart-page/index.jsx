import React from 'react';
import {
  Box,
  Container,
} from '@mui/material';
import List from './components/list';

const CartPage = () => (

  <Box sx={{ backgroundColor: 'common.main', height: '100vh' }}>
    <Container maxWidth="false" sx={{ maxWidth: '1400px', backgroundColor: 'common.dark' }}>
      <Box sx={{
        pt: 3,
        px: 30,
        pb: 2,
      }}
      >
        <List />
      </Box>
    </Container>
  </Box>

);

export default CartPage;
