import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const propsForStyling = ['contracted'];

export const Link = styled(NavLink, {
  shouldForwardProp: (propName) => !propsForStyling.includes(propName),
})(({ theme, contracted }) => {
  const {
    palette: { common, grey },
    spacing,
  } = theme;

  const commonStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing(0, 2),
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    fontFamily: 'Montserrat',
  };

  return contracted
    ? {
      ...commonStyles,
      color: 'white',
      margin: spacing(0, 4),
      padding: spacing(2, 0),
      fontWeight: 400,
      fontSize: 14,
      fontFamily: 'Montserrat',

      '&.active': {
        color: common.light,
        fontWeight: 700,
        fontSize: 16,
      },

      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${grey[400]}`,
      },
    }
    : {
      ...commonStyles,
      color: grey[200],

      // '&.active': {
      // boxShadow: `inset 0 -2px 0 ${common.white}`,
      // },

      ':hover': {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
      },
    };
});
