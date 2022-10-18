import React from 'react';
import {
  IconButton,
  Divider,
  Typography,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';

import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from '../../../hooks/useAuth';
import { authLogoutAction } from '../../../store/auth/auth-actions';

const LogedIn = () => {
  const AuthMenuIconRef = React.useRef(null);
  const [authMenuOpen, setAuthMenuOpen] = React.useState(false);
  const { dispatch } = useAuth();

  return (
    <>
      <IconButton
        sx={{ ml: 1, alignSelf: 'center' }}
        ref={AuthMenuIconRef}
        onClick={() => setAuthMenuOpen(!authMenuOpen)}
      >
        <Button
          sx={{ width: 36, height: 36 }}
        >
          <Typography sx={{ color: 'white', fontSize: 12, pl: 3 }}>Prisijungęs</Typography>
        </Button>
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={AuthMenuIconRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={authMenuOpen}
        onClose={() => setAuthMenuOpen(false)}
      >
        <Divider sx={{ my: 1 }} />
        <MenuItem
          sx={{ display: 'flex', justifyContent: 'space-between' }}
          onClick={() => {
            dispatch(authLogoutAction);
            setAuthMenuOpen(false);
          }}
        >
          <Typography textAlign="center">Atsijungti</Typography>
          <LogoutIcon sx={{ ml: 2 }} />
        </MenuItem>
      </Menu>
    </>
  );
};

export default LogedIn;
