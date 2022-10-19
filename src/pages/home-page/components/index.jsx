import { Box, Button, styled } from '@mui/material';

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: 12,

  [theme.breakpoints.down('xxl')]: {
    margin: 'auto',
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const ButtonLink = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  minWidth: 150,
  height: 38,
  color: theme.palette.secondary.main,
  background: theme.palette.primary.main,
  fontFamily: 'Montserrat',
  [theme.breakpoints.down('lg')]: {
    background: theme.palette.common.light,
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
}));

export const IconContent = styled(Box)(({ theme }) => ({
  gap: theme.spacing(6),
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('lg')]: {
    paddingBottom: 10,
  },
}));

export const Footer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    paddingTop: 30,
    paddingBottom: 30,
  },
}));
