import React from 'react';
import {
  Box,
  IconButton,
  Divider,
  List,
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import * as Nav from './index';

const pages = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Nameliai', to: '/shop' },
  { text: 'Apie mus', to: '/about' },
];

const DrawerSection = () => {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <IconButton
        sx={{
          mx: 4,
          px: 2,
        }}
        size="large"
        edge="end"
        color="inherit"
        onClick={() => navigate('/cart')}
      >
        <ShoppingCartIcon sx={{
          color: 'white',
          fontSize: 14,
        }}
        />
      </IconButton>
      <Divider />
      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
      >
        {pages.map(({ text, to }) => <Nav.Link key={to} to={to} contracted>{text}</Nav.Link>)}
        <Nav.Link to="/auth/login" contracted>
          <PersonOutlineIcon />
        </Nav.Link>
        <Nav.Link to="/auth/register" contracted>REGISTER</Nav.Link>
      </List>
    </Box>
  );
};

export default DrawerSection;
