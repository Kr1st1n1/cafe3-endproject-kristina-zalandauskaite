import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';
import { Link } from 'react-router-dom';
import * as Home from './index';

const HomeContent = () => (
  <Box>
    <Container
      maxWidth="false"
      sx={{
        maxWidth: 1400,
      }}
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
              color: 'black',
              textAlign: 'center',
              fontSize: { xs: '1rem' },
            })}
          >
            ATOTRŪKIS TAVO PROTUI IR KŪNUI...

          </Typography>
          <Typography
            variant="h6"
            sx={() => ({
              color: 'black',
              fontSize: { xs: '1rem', md: '1rem', xxl: '0.8rem' },
              textAlign: 'center',
              pt: 3,
              px: 11,
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
            <Link to="/adopt" style={{ textDecoration: 'none' }}>
              <Home.ButtonLink variant="contained">
                APIE MUS
              </Home.ButtonLink>
            </Link>
          </Box>
        </Box>
        <Box
          width="50%"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            minHeight: 640,
          }}
        >
          <Box
            component="img"
            width="250px"
            src="/stiprybe.jpg"
            sx={{
              position: 'absolute',
              top: 81,
              left: 20,
              zIndex: 1,
            }}
          />
          <Box
            component="img"
            width="250px"
            src="/balancas.png"
            sx={{
              position: 'absolute',
              top: 150,
              left: 268,
              zIndex: 4,
            }}
          />
          <Box
            component="img"
            width="240px"
            src="/pabegimas.jpg"
            sx={{
              position: 'absolute',
              top: 300,
              left: 118,
              zIndex: 3,
            }}
          />
        </Box>
      </Home.Content>
    </Container>
  </Box>
);

export default HomeContent;
