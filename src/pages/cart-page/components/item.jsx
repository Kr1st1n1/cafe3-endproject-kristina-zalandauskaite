import * as React from 'react';
import {
  Box,
  Typography,
  OutlinedInput,
  IconButton,
  styled,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ShowerIcon from '@mui/icons-material/Shower';
import CheckIcon from '@mui/icons-material/Check';
import SpaIcon from '@mui/icons-material/Spa';
import Image from '../../../components/image';
import 'react-datepicker/dist/react-datepicker.css';

const StyledDaypicker = styled(DatePicker)`
border: 2px solid black;
outline: none;
border-radius: 8px;
color: green;
min-height: 40px;
width: 100px;
text-align: center;
font-weight: 900;
`;

const Item = ({
  title,
  images,
  textProps,
  price,
  count,
  startDate,
  endDate,
  deleteItem,
  setCount,
}) => {
  const [checkInDate, setCheckInDate] = React.useState(startDate);
  const [checkOutDate, setCheckOutDate] = React.useState(endDate);
  const dayCount = moment(checkOutDate).diff(moment(checkInDate), 'days') + 1;

  const handleCheckInDate = (date) => {
    setCount(date, 1);
    setCheckInDate(date);
  };

  const handleCheckOutDate = (date) => {
    setCount(date, 2);
    setCheckOutDate(date);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', lg: 'top' },
        justifyContent: 'center',
        gap: 2,
        pt: 5,
        width: { xs: 'auto', lg: 300 },
      }}
      >
        <Image
          src={(images && images[0]) ?? '/no-img.jpg'}
          sx={{
            height: 200,
            width: 200,
            borderRadius: '0%',
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h7" sx={{ fontFamily: 'Montserrat' }}>{title}</Typography>
            <Typography variant="h7" sx={{ fontFamily: 'Montserrat' }}>{textProps}</Typography>
            <Box>
              <CheckIcon sx={{ fontFamily: 'Montserrat', fontSize: '12px' }} />
              <Typography variant="h7" sx={{ fontFamily: 'Montserrat', fontSize: '12px' }}> Įskaičiuoti pusryčiai</Typography>
            </Box>
            <Box>
              <CheckIcon sx={{ fontFamily: 'Montserrat', fontSize: '12px' }} />
              <Typography variant="h7" sx={{ fontFamily: 'Montserrat', fontSize: '12px' }}> Lorem ipsum dolor</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            <WifiIcon />
            <AcUnitIcon />
            <ShowerIcon />
            <SpaIcon />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'space-around', pb: 4, pt: 4,
        }}
      >

        <Box sx={{ pb: 2, justifyContent: 'center', display: 'flex' }}>
          <Box sx={{
            textAlign: 'center',
            height: '18vh',
            Flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Box sx={{
              display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
            }}
            >
              <Box>
                <Box sx={{
                  fontSize: '16px',
                  fontFamily: 'Montserrat',
                }}
                >
                  Įsiregistravimas

                </Box>
                <StyledDaypicker
                  selected={checkInDate}
                  minDate={new Date()}
                  onChange={handleCheckInDate}
                />
              </Box>
              <Box>
                <Box sx={{
                  fontSize: '16px',
                  fontFamily: 'Montserrat',
                }}
                >
                  Išsiregistravimas

                </Box>
                <StyledDaypicker
                  selected={checkOutDate}
                  minDate={checkInDate}
                  onChange={handleCheckOutDate}
                />
              </Box>
            </Box>
            {checkInDate && checkOutDate && (
            <Box sx={{ fontSize: '18px' }}>
              <Typography sx={{ fontFamily: 'Montserrat' }}>
                Jūsų rezervacija..

                {moment(checkInDate).format('LL')}

                ..iki..

                {moment(checkOutDate).format('LL')}
                .
              </Typography>
            </Box>
            )}

          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{
            display: 'flex', pt: 2, pr: 2, fontFamily: 'Montserrat',
          }}
          >
            Nakvynių skaičius:
          </Typography>
          <Box sx={{
            display: 'flex', alignItems: 'center', pb: 2, justifyContent: 'center',
          }}
          >
            <OutlinedInput
              variant="contained"
              size="small"
              inputProps={{
                style: {
                  padding: 0, width: 50, height: 30, minWidth: 0, textAlign: 'center',
                },
                value: count * dayCount || 0,
              }}
              readOnly
              sx={{ borderRadius: '50%', height: 50 }}
            />
          </Box>
        </Box>

        <Box sx={{
          display: 'flex', alignItems: 'center', pb: 2, justifyContent: 'center',
        }}
        >
          <Typography sx={{ pr: 2, fontFamily: 'Montserrat' }}> Vienos nakvynės kaina:</Typography>
          { `${price.toFixed(2)} $`}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography sx={{ pr: 2, fontFamily: 'Montserrat' }}> Rezervuoto laikotarpio kaina:</Typography>
          {`${(price * dayCount * count || 0).toFixed(2)} $`}

        </Box>

      </Box>
      <IconButton
        size="medium"
        sx={{
          height: 30, display: 'flex', alignSelf: 'center', pt: 0,
        }}
        onClick={deleteItem}
      >
        <DeleteIcon
          sx={{ color: '#1C3879', fontSize: 30 }}
        />
      </IconButton>
    </Box>

  );
};
export default Item;
