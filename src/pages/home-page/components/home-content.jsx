import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';
import { Link } from 'react-router-dom';
import BgImage from '../../../assets/forest.jpg';
import * as Home from './index';

const HomeContent = () => (
  <Box sx={{
    backgroundImage: { xs: `url(${BgImage})`, lg: 'none' },
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: 600,
  }}
  >
    <Container
      maxWidth="false"
      sx={{ maxWidth: 1400 }}
    >
      <Home.Content>
        <Box sx={{
          width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={() => ({
              letterSpacing: '0.08em',
              color: { xs: 'common.light', lg: 'black' },
              textAlign: 'center',
              fontSize: { xs: '1rem' },
              fontWeight: '700',
              pt: { xs: 5 },
              fontFamily: 'Montserrat',
            })}
          >
            ATOTRŪKIS TAVO PROTUI IR KŪNUI...

          </Typography>
          <Typography
            variant="h6"
            sx={() => ({
              color: { xs: 'common.light', lg: 'black' },
              fontSize: { xs: '0.8rem', md: '1rem', xxl: '0.8rem' },
              textAlign: 'center',
              pt: 3,
              px: {
                xs: 1, xl: 11, lg: 1,
              },
              fontFamily: 'Montserrat',
            })}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            exercitationem.Dolor quas
            eaque esse tempora illo nemo,
            rem corporis aperiam itaque quos.Incidunt tempore hic accusamus
            expedita rem recusandae! Aut?
          </Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            pt: 4,
          }}
          >
            <Link to="/shop" style={{ textDecoration: 'none' }}>
              <Home.ButtonLink variant="contained">
                NAMELIAI
              </Home.ButtonLink>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Home.ButtonLink variant="contained">
                APIE MUS
              </Home.ButtonLink>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: { lg: 'flex', xs: 'none' },
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            minHeight: 640,
            width: { xs: '100%', lg: '50%' },
          }}
        >
          <Box
            component="img"
            src="/stiprybe.jpg"
            sx={{
              width: { sm: '37%', xs: '43%' },
              position: 'absolute',
              top: {
                xxl: 81, xl: 81, lg: 143, xs: 84,
              },
              left: {
                xxl: 20, xl: 20, lg: 20, xs: 35,
              },
              zIndex: 1,
            }}
          />
          <Box
            component="img"
            src="/balancas.png"
            sx={{
              position: 'absolute',
              width: { sm: '37%', xs: '44%' },
              top: {
                xxl: 150, xl: 150, lg: 194, xs: 234,
              },
              left: {
                xxl: 280, xl: 280, lg: 205, xs: 165,
              },
              zIndex: 4,
            }}
          />
          <Box
            component="img"
            src="/pabegimas.jpg"
            sx={{
              position: 'absolute',
              width: { sm: '37%', xs: '45%' },
              top: {
                xxl: 300, xl: 300, lg: 300, xs: 362,
              },
              left: { lg: 118, xs: 30 },
              zIndex: 3,
            }}
          />
        </Box>
      </Home.Content>
    </Container>
  </Box>
);

export default HomeContent;
