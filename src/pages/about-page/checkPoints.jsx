import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const CheckPoints = () => (
  <Box sx={{ display: 'flex', width: '100%', p: 2 }}>

    <CheckIcon />
    <Typography sx={() => ({
      fontSize: '14px',
      color: 'primary.dark',
      px: { xs: 1, md: 5 },
      fontFamily: 'Montserrat',
    })}
    >
      Lorem ipsum dolor, sit amet consectetur sit amet consectetur
    </Typography>
  </Box>
);

export default CheckPoints;
