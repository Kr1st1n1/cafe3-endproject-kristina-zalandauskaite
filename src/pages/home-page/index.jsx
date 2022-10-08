import * as React from 'react';
import {
  Box,
} from '@mui/material';
import HomeContent from './components/home-content';
import HomeFooter from './components/home-footer';
import HomeCards from './components/home-cards';

const HomePage = () => (
  <Box>
    <HomeContent />
    <HomeCards />
    <HomeFooter />
  </Box>
);
export default HomePage;
