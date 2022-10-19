import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import useCart from '../../../../../hooks/useCart';

const CommerceSection = () => {
  useCart();

  return (
    <Box component="pre">
      <Button>
        Rezervacija telefonu: +000 0035 658888
      </Button>
      <Link
        to="/shop"
        style={{
          color: '#1C3879', textDecoration: 'none', display: 'flex', gap: 7,
        }}
      >
        <KeyboardBackspaceIcon fontSize="large" />
        <Typography variant="h6" sx={{ color: 'black', fontWeight: 700 }}>Grįžti atgal</Typography>
      </Link>
    </Box>
  );
};

export default CommerceSection;
