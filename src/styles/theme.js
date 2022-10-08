import { createTheme } from '@mui/material';

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 780,
      lg: 992,
      xl: 1200,
      xxl: 1536,
    },
  },

  shape: {
    borderRadius: 4,
  },

  zIndex: {
    appBar: 1300,
  },
});

const mixinTheme = createTheme(baseTheme, {
  mixins: {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '64px',
      padding: baseTheme.spacing(0, 2),
    },
  },
});

const createColor = (color) => mixinTheme.palette.augmentColor({ color: { main: color } });

const lightTheme = createTheme(mixinTheme, {
  palette: {
    background: {
      default: '#F1F1F1',
    },
    primary: createColor('#000000'),
    secondary: createColor('#EAE3D2'),
    common: createColor('#F9F5EB'),
    success: createColor('#607EAA'),

  },
});

export default lightTheme;
