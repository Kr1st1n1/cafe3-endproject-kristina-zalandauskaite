import * as React from 'react';
import {
  Container, Box, Typography,
} from '@mui/material';
import Image from '../../components/image';
import ImageAbout from '../../assets/aboutone.jpg';
import ImageAtgaiva from '../../assets/ramybe.jpg';

const AboutContent = () => (
  <Box sx={{ backgroundColor: 'common.light' }}>
    <Container maxWidth="false" sx={{ maxWidth: 1400 }}>
      <Box sx={{
        display: 'flex', alignItems: 'center', flexDirection: 'column', pt: 4,
      }}
      >
        <Box sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' },
        }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{
              fontSize: '18px',
              alignText: 'center',
              color: 'primary.dark',
              px: { xs: 1, md: 5 },
              fontWeight: 600,
              fontFamily: 'Montserrat',
            }}
            >
              Lorem ipsum
            </Typography>
            <Typography sx={() => ({
              fontSize: '14px',
              alignText: 'center',
              color: 'primary.dark',
              px: { xs: 1, md: 5 },
              fontFamily: 'Montserrat',
            })}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. N
              emo, voluptate! Nesciunt, minima
              veritatis unde officiis veniam eos sequi eligendi illo voluptatem
              porro et sit fuga iste esse, dolores eaque sed.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo, voluptate! Nesciunt, minima
              Lorem ipsum dolor sit amet consectetur adipisicing elit. N
              emo, voluptate! Nesciunt, minima
              veritatis unde officiis veniam eos sequi eligendi illo voluptatem
              porro et sit fuga iste esse, dolores eaque sed.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo, voluptate! Nesciunt, minima
              Lorem ipsum dolor sit amet consectetur adipisicing elit. N
              emo, voluptate! Nesciunt, minima
              veritatis unde officiis veniam eos sequi eligendi illo voluptatem
              porro et sit fuga iste esse, dolores eaque sed.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo, voluptate! Nesciunt, minima
            </Typography>
          </Box>

          <Box sx={{
            maxWidth: 300,
            pt: { xs: 4, lg: 0 },
          }}
          >
            <Image
              src={ImageAbout}
              sx={{
                borderRadius: '4px',
                boxShadow: '-5px 9px 13px 0px',
                width: { xs: '200px', lg: '250px' },
              }}
            />
          </Box>
        </Box>
        <Box sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' },
        }}
        >
          <Box sx={{
            maxWidth: 300,
            order: { xs: 2, lg: 1 },
            pt: { xs: 4, lg: 0 },
          }}
          >
            <Image
              src={ImageAtgaiva}
              sx={{
                borderRadius: '4px',
                boxShadow: '-5px 9px 13px 0px',
                width: { xs: '200px', lg: '250px' },

              }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', order: { xs: 1 } }}>
            <Typography sx={{
              fontSize: '18px',
              alignText: 'center',
              color: 'primary.dark',
              px: { xs: 1, md: 5 },
              fontWeight: 600,
              fontFamily: 'Montserrat',
              pt: { xs: 4, lg: 0 },
            }}
            >
              Lorem ipsum
            </Typography>
            <Typography sx={() => ({
              fontSize: '14px',
              alignText: 'center',
              color: 'primary.dark',
              px: { xs: 1, md: 5 },
              fontFamily: 'Montserrat',
            })}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. N
              emo, voluptate! Nesciunt, minima
              veritatis unde officiis veniam eos sequi eligendi illo voluptatem
              porro et sit fuga iste esse, dolores eaque sed.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo, voluptate! Nesciunt, minima
              Lorem ipsum dolor sit amet consectetur adipisicing elit. N
              emo, voluptate! Nesciunt, minima
              veritatis unde officiis veniam eos sequi eligendi illo voluptatem
              porro et sit fuga iste esse, dolores eaque sed.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo, voluptate! Nesciunt, minima
              Lorem ipsum dolor sit amet consectetur adipisicing elit. N
              emo, voluptate! Nesciunt, minima
              veritatis unde officiis veniam eos sequi eligendi illo voluptatem
              porro et sit fuga iste esse, dolores eaque sed.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo, voluptate! Nesciunt, minima
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default AboutContent;
