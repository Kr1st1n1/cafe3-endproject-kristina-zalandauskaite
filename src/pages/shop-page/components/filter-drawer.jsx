import React from 'react';
import {
  Button,
  Drawer,
  Box,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const FilterDrawer = ({ children }) => {
  const [drawer, setDrawer] = React.useState(false);

  return (
    <>
      <Button
        size="large"
        color="primary"
        variant="contained"
        sx={{
          position: 'fixed',
          zIndex: 5000,
          bottom: 25,
          right: 25,
          height: 64,
          width: 64,
        }}
        onClick={() => setDrawer(!drawer)}
      >
        <FilterListIcon sx={{ color: 'common.white', fontSize: '2rem' }} />
      </Button>

      <Drawer
        anchor="top"
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        <Box sx={{
          height: { xs: 600, lg: 300 }, pt: 5, px: { xs: 3, lg: 0 }, backgroundColor: 'common.light',
        }}
        >
          {children}
        </Box>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
