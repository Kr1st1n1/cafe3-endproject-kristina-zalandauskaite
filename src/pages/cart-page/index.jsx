import React from 'react';
import {
  Box,
  Container,
} from '@mui/material';
import List from './components/list';

const CartPage = () => (
  <Box>
    <Container maxWidth="false" sx={{ maxWidth: '1400px' }}>
      <Box sx={{
        p: 15,
      }}
      >
        <List />
      </Box>
    </Container>
  </Box>
);

export default CartPage;
