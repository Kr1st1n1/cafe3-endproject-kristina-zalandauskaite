import * as React from 'react';
import {
  Container, Box, Typography,
} from '@mui/material';
import Image from '../../components/image';
import BgImage from '../../asstest/greenbg.jpg';

const AboutPage = () => (
  <Box sx={{
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
    height: '100vh',
    width: '100%',
    color: 'primary.dark',
    position: 'absolute',
    backgroundColor: 'rgba(155, 155, 155, 0.8)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }}
  >
    <Box sx={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      bgcolor: 'rgba(29, 25, 25, 0.63)',
    }}
    >
      <Container maxWidth="false" sx={{ px: 36, maxWidth: 1400 }}>
        <Box sx={{
          display: 'flex', alignItems: 'center', flexDirection: 'column',
        }}
        >
          <Typography sx={{
            fontWeight: 600, pt: 10, pb: 5, fontSize: '16px',
          }}
          >
            MŪSŲ ISTORIJA
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{
              fontSize: '14px',
              alignText: 'center',
              maxWidth: '70%',
            }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. N
              emo, voluptate! Nesciunt, minima
              veritatis unde officiis veniam eos sequi eligendi illo voluptatem
              porro et sit fuga iste esse, dolores eaque sed.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo, voluptate! Nesciunt, minima
              veritatis unde officiis veniam eos sequi eligendi illo voluptatem
              porro et sit fuga iste esse, dolores eaque sed.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo, voluptate! Nesciunt, minima
              veritatis unde officiis veniam eos sequi eligendi illo voluptatem
              porro et sit fuga iste esse, dolores eaque sed.
              porro et sit fuga iste esse, dolores eaque sed.
              porro et sit fuga iste esse, dolores eaque sed.
            </Typography>

            <Box sx={{
              maxWidth: 300,
            }}
            >
              <Image src="/hapiness.jpg" />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{
              maxWidth: 300,
            }}
            >
              <Image src="/award.jpg" />
            </Box>
            <Typography sx={{
              fontSize: '14px',
              alignText: 'center',
              maxWidth: '70%',
            }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. N
              emo, voluptate! Nesciunt, minima
              veritatis unde officiis veniam eos sequi eligendi illo voluptatem
              porro et sit fuga iste esse, dolores eaque sed.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo, voluptate! Nesciunt, minima
              veritatis unde officiis veniam eos sequi eligendi illo voluptatem
              porro et sit fuga iste esse, dolores eaque sed.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo, voluptate! Nesciunt, minima
              veritatis unde officiis veniam eos sequi eligendi illo voluptatem
              porro et sit fuga iste esse, dolores eaque sed.
              porro et sit fuga iste esse, dolores eaque sed.
              porro et sit fuga iste esse, dolores eaque sed.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  </Box>
);

export default AboutPage;
