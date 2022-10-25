import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mt: 2,
    }}
  >

    <Link to="/order" style={{ textDecoration: 'none' }}>
      <Button sx={{
        backgroundColor: 'primary.main',
        color: 'secondary.main',
        minWidth: 180,
        maxHeight: 36,
      }}
      >
        APMOKĖTI
      </Button>
    </Link>

  </Box>
);

export default Footer;
