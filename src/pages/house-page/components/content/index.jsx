import { Box, Divider } from '@mui/material';
import React from 'react';
import { CommerceSection, InfoSection } from './components';

const Content = ({ house }) => (
  <Box>
    <InfoSection house={house} />
    <Divider />
    <CommerceSection house={house} />
  </Box>
);

export default Content;
