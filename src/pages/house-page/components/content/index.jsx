import { Box, Divider, Container } from '@mui/material';
import React from 'react';
import { CommerceSection, InfoSection } from './components';

const Content = ({ house }) => (
  <Container
    maxWidth="false"
    sx={{
      maxWidth: 1400,
    }}
  >
    <Box sx={{ display: { md: 'flex' }, justifyContent: 'space-around' }}>
      <InfoSection house={house} />
      <Divider />
      <CommerceSection house={house} />
    </Box>
  </Container>
);

export default Content;
