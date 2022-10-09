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
      py: 8,
    }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: '16px',
        }}
      >
        TOTAL COST:

      </Typography>
      <Typography
        sx={{
          fontSize: '16px',
        }}
        variant="h6"
      >
        {totalPrice.toFixed(2)}

      </Typography>
    </Box>

    <Link to="/order" style={{ textDecoration: 'none' }}>
      <Button sx={{
        backgroundColor: 'primary.main',
        color: 'secondary.main',
        minWidth: 180,
        maxHeight: 36,
      }}
      >
        Next

      </Button>
    </Link>

  </Box>
);

export default Footer;
