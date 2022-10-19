import * as React from 'react';
import {
  Container, Box, Typography,
} from '@mui/material';
import BgImage from '../../assets/bg-about.jpg';

const AboutPage = () => (
  <Box sx={{
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    minHeight: '30vh',
    pt: '100px',
    width: '100%',
    color: 'primary.dark',
    opacity: 0.99,
    boxShadow: 'inset 120em 1em #e7e2e24a',
  }}
  >
    <Box>
      <Container maxWidth="false" sx={{ maxWidth: 1400 }}>
        <Box sx={{
          display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
        }}
        >
          <Typography sx={{
            fontWeight: 600, pt: { xs: 1, md: 6 }, fontSize: '16px', color: 'common.white',
          }}
          >
            MŪSŲ ISTORIJA
          </Typography>
        </Box>
      </Container>
    </Box>
  </Box>
);

export default AboutPage;
