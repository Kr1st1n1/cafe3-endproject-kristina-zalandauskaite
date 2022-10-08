import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import SpaIcon from '@mui/icons-material/Spa';
import PsychologyIcon from '@mui/icons-material/Psychology';

const HomeCards = () => (
  <Box sx={{
    Width: '100%',
    backgroundColor: '#20332e2e',
    height: 'auto',
  }}
  >
    <Container
      maxWidth="false"
      sx={{
        maxWidth: 1400,
      }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        height: 'auto',
        p: 4,
      }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          px: 3,
        }}
        >
          <Typography sx={{ fontSize: 12 }}>RAMYBĖ</Typography>
          <SelfImprovementIcon sx={{
            fontSize: 46,
            color: '#142223;',
          }}
          />
          <Typography sx={{ fontSize: 12 }} textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            labore, ut autem ullam, deleniti explicabo eos!
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          px: 3,
        }}
        >
          <Typography sx={{ fontSize: 12 }}>POILSIS</Typography>
          <SpaIcon sx={{
            fontSize: 46,
            color: '#142223;',
          }}
          />
          <Typography sx={{ fontSize: 12 }} textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            labore, ut autem ullam, deleniti explicabo eos!
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          px: 3,
        }}
        >
          <Typography sx={{ fontSize: 12 }}>PABĖGIMAS</Typography>
          <PsychologyIcon sx={{
            fontSize: 46,
            color: '#142223;',
          }}
          />
          <Typography
            sx={{ fontSize: 12 }}
            textAlign="center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            labore, ut autem ullam, deleniti explicabo eos!
          </Typography>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default HomeCards;
