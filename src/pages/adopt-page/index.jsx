import * as React from 'react';
import {
  Container, Box, Typography, Button,
} from '@mui/material';

const AdoptDonatePage = () => (
  <Container sx={{ px: 36, maxWidth: 1400 }}>
    <Box sx={{
      display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
    }}
    >
      <Box sx={{
        bgcolor: 'blue', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        <Box>img</Box>
        <Typography>Lorem ipsum dolor sit amet</Typography>
        <Button>Adopt</Button>
      </Box>
      <Box>
        Petition
      </Box>
      <Box>
        Donate
      </Box>
    </Box>
  </Container>
);

export default AdoptDonatePage;
