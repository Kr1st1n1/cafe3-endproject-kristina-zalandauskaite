import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';
import { Link } from 'react-router-dom';
import BgImage from '../../../assets/forest.jpg';
import BalanceImg from '../../../assets/balance.png';
import StrongImg from '../../../assets/stiprybe.jpg';
import RunAwayImg from '../../../assets/pabegimas.jpg';
import * as Home from './index';

const HomeContent = () => (
  <Box sx={{
    backgroundImage: { xs: `url(${BgImage})`, lg: 'none' },
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: { xs: '56vh', lg: '64vh' },
    backgroundColor: { lg: 'common.light' },
    opacity: 0.99,
    boxShadow: { xs: 'inset 120em 1em #0a0808c9', lg: 'none' },
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
              fontSize: '18px',
              fontWeight: '700',
              pt: { xs: 5, lg: 0 },
              fontFamily: 'Montserrat',
            })}
          >
            ATOTRŪKIS TAVO PROTUI IR KŪNUI...

          </Typography>
          <Typography
            variant="h6"
            sx={() => ({
              color: { xs: 'common.light', lg: 'black' },
              fontSize: '14px',
              textAlign: 'center',
              pt: {
                xs: 3, md: 5, xl: 3, lg: 3,
              },
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
            flexDirection: { xs: 'row', lg: 'column' },
            alignItems: 'center',
            gap: 3,
            pt: { xs: 7, md: 15, lg: 4 },
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
            src={StrongImg}
            sx={{
              width: { sm: '37%', xs: '43%' },
              position: 'absolute',
              top: {
                xxl: 71, xl: 71, lg: 143, xs: 84,
              },
              left: {
                xxl: 20, xl: 20, lg: 20, xs: 35,
              },
              zIndex: 1,
            }}
          />
          <Box
            component="img"
            src={BalanceImg}
            sx={{
              position: 'absolute',
              width: { sm: '37%', xs: '44%' },
              top: {
                xxl: 140, xl: 140, lg: 194, xs: 234,
              },
              left: {
                xxl: 280, xl: 280, lg: 205, xs: 165,
              },
              zIndex: 4,
            }}
          />
          <Box
            component="img"
            src={RunAwayImg}
            sx={{
              position: 'absolute',
              width: { sm: '37%', xs: '45%' },
              top: {
                xxl: 240, xl: 225, lg: 300, xs: 362,
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
