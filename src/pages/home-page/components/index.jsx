import { Box, Button, styled } from '@mui/material';

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: 12,

  [theme.breakpoints.down('xxl')]: {
    margin: 'auto',
  },
}));

export const ButtonLink = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  minWidth: 150,
  height: 38,
  color: theme.palette.secondary.main,
  background: theme.palette.primary.main,
}));

export const Footer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}));

export const IconContent = styled(Box)(({ theme }) => ({
  gap: theme.spacing(5),
  display: 'flex',
  flexDirection: 'row',
}));
