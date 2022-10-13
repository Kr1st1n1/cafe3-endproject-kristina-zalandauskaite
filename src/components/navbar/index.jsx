import * as React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Drawer,
  Badge,
  Divider,
  List,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import * as Nav from './components';
import useCart from '../../hooks/useCart';

const pages = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Nameliai', to: '/shop' },
  { text: 'Apie mus', to: '/about' },
];

const drawerWidth = 240;

const Navbar = () => {
  const { cartItemsCount } = useCart();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentButton, setCurrentButton] = React.useState(1);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
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

  return (
    <Box>
      <AppBar
        position="fixed"
      >
        <Container
          maxWidth="false"
          sx={{ maxWidth: 1400 }}
        >
          <Box sx={(theme) => theme.mixins.navbar}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'flex', xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{
              display: {
                xs: 'none', sm: 'none', md: 'flex', xxl: 'flex',
              },
              alignSelf: 'stretch',
              fontSize: '14px',
              letterSpacing: 1,
            }}
            >
              {pages.map(({ text, to }, i) => (
                <Nav.Link
                  key={to}
                  to={to}
                  onClick={() => setCurrentButton(i)}
                  style={{
                    color: currentButton === i ? 'white' : 'white',
                    boxShadow: currentButton === i ? 'inset 0 -2px 0 white' : 'none',
                  }}
                >
                  {text}
                </Nav.Link>
              ))}
            </Box>
            <Box sx={{ display: 'flex' }}>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={() => navigate('/cart')}
              >
                <Badge badgeContent={cartItemsCount} color="secondary">
                  <ShoppingCartIcon sx={{ fontSize: '22px' }} />
                </Badge>
              </IconButton>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Nav.Link to="/auth/login">
                  <PersonOutlineIcon sx={{
                    color: 'white',
                    fontSize: 24,
                  }}
                  />

                </Nav.Link>
                <Nav.Link
                  to="/auth/register"
                  sx={{
                    color: 'white',
                    fontSize: 14,
                    letterSpacing: 1,
                  }}
                >
                  Naujas vartotojas

                </Nav.Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'black',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
export default Navbar;
