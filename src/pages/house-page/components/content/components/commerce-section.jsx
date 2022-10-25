import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import useCart from '../../../../../hooks/useCart';

const CommerceSection = () => {
  useCart();

  return (
    <Box
      component="pre"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column' },
        pt: 10,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column' },
      }}
      >
        <Typography sx={{
          fontSize: '12px',
          fontFamily: 'Monserrat',
        }}
        >
          Rezervacija telefonu:
        </Typography>
        <Typography>
          +000 0035 5252
        </Typography>
      </Box>
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
