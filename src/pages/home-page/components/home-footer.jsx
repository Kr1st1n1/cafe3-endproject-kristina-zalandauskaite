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
          p: 1,
          pl: { xs: 4, md: 0 },
        }}
        >
          <Typography sx={{ fontSize: 14, fontFamily: 'Montserrat' }}> Kontaktiniai duomenys</Typography>
          <Typography sx={{ fontSize: 14, fontFamily: 'Montserrat' }}>Fax.: 88888</Typography>
          <Typography sx={{ fontSize: 14, fontFamily: 'Montserrat' }}>Mob.: +37 0 55555555</Typography>
          <Typography sx={{ fontSize: 14, fontFamily: 'Montserrat' }}>Adresas.: tenkurgrazu g. 100, Simtasbalu</Typography>
        </Box>
      </Home.Footer>
    </Container>
  </Box>
);

export default HomeFooter;
