import React from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = ({ totalPrice }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mt: 5,
    }}
  >

    <Box sx={{
      display: 'flex',
      gap: 10,
      px: 16,
    }}
    >
      <Typography variant="h6">TOTAL COST:</Typography>
      <Typography variant="h6">{totalPrice.toFixed(2)}</Typography>
    </Box>

    <Link to="/order" style={{ textDecoration: 'none' }}>
      <Button sx={{
        p: 2,
        backgroundColor: 'blue',
      }}
      >
        Next

      </Button>
    </Link>

  </Box>
);

export default Footer;
