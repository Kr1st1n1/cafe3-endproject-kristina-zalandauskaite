import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import * as Home from './index';

const HomeFooter = () => (
  <Box sx={{
    backgroundColor: 'primary.main',
    color: 'secondary.main',
  }}
  >
    <Container
      maxWidth="false"
      sx={{
        maxWidth: 1400,
      }}
    >
      <Home.Footer>
        <Home.IconContent>
          <InstagramIcon sx={{
            fontSize: { xs: 19, md: 24, xxl: 20 },
          }}
          />
          <FacebookIcon sx={{
            fontSize: { xs: 19, md: 24, xxl: 20 },
          }}
          />
          <TwitterIcon sx={{
            fontSize: { xs: 19, md: 24, xxl: 20 },
          }}
          />
        </Home.IconContent>
        <Box sx={{
          p: 2,
          fontSize: 14,
        }}
        >
          <Typography sx={{ fontSize: 10, fontFamily: 'Montserrat' }}> KONTAKTAI</Typography>
          <Typography sx={{ fontSize: 10, fontFamily: 'Montserrat' }}>Mob.: +37 0 555555555555</Typography>
          <Typography sx={{ fontSize: 10, fontFamily: 'Montserrat' }}>Adresas.: tenkurgrazu 100 g. Simtasbalu</Typography>
          <Typography sx={{ fontSize: 10, fontFamily: 'Montserrat' }}>Fax.: 88888888</Typography>
        </Box>
      </Home.Footer>
    </Container>
  </Box>
);

export default HomeFooter;
