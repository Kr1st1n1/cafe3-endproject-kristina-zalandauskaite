import * as React from 'react';
import {
  Box,
} from '@mui/material';
import AboutContent from './about-content';
import BackgroundBox from './background-box';

const AboutPage = () => (
  <Box>
    <BackgroundBox />
    <AboutContent />
  </Box>
);

export default AboutPage;
