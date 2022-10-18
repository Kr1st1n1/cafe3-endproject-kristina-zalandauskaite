import * as React from 'react';
import {
  Box,
  Typography,
  OutlinedInput,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import DateRange from './dateRange';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Image from '../../../components/image';
import 'react-datepicker/dist/react-datepicker.css';

const Item = ({
  title,
  images,
  price,
  count,
  category,
  deleteItem,
}) => {
  const [checkInDate, setCheckInDate] = React.useState(null);
  const [checkOutDate, setCheckOutDate] = React.useState(null);

  const dayCount = moment(checkOutDate).diff(moment(checkInDate), 'days');

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        width: 300,
      }}
      >
        <Image
          src={(images && images[0]) ?? '/no-img.jpg'}
          sx={{
            height: 100,
            width: 100,
            borderRadius: '50%',
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h7">{title}</Typography>
          <Typography variant="h8">{category}</Typography>
        </Box>
      </Box>

      <Box
        minWidth={420}
        sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'space-around', pb: 4,
        }}
      >

        <Box sx={{ pb: 2, justifyContent: 'center', display: 'flex' }}>
          <Box sx={{
            textAlign: 'center',
            height: '35vh',
            Flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px',
          }}
          >
            <Box sx={{
              display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
            }}
            >
              <Box>
                <Box>Įsiregistravimas</Box>
                <DatePicker
                  selected={checkInDate}
                  minDate={new Date()}
                  onChange={handleCheckInDate}
                />
              </Box>
              <Box>
                <Box>Išsiregistravimas</Box>
                <DatePicker
                  selected={checkOutDate}
                  minDate={checkInDate}
                  onChange={handleCheckOutDate}
                />
              </Box>
            </Box>
            {checkInDate && checkOutDate && (
            <Box sx={{ fontSize: '18px' }}>
              <Typography>
                Jūsų rezervacija..

                {moment(checkInDate).format('LL')}

                ..iki..

                {moment(checkOutDate).format('LL')}
                .
              </Typography>
              {dayCount}
              .
            </Box>
            )}

          </Box>
        </Box>

        <Box sx={{
          display: 'flex', alignItems: 'center', pb: 2, justifyContent: 'center',
        }}
        >
          <OutlinedInput
            variant="contained"
            size="small"
            inputProps={{
              style: {
                padding: 0, width: 30, height: 30, minWidth: 0, textAlign: 'center',
              },
              value: count * dayCount,
            }}
            readOnly
            sx={{ borderRadius: 0, height: 30 }}
          />
        </Box>

        <Box sx={{
          display: 'flex', alignItems: 'center', pb: 2, justifyContent: 'center',
        }}
        >
          { `${price.toFixed(2)} $`}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{`${(price * count * dayCount).toFixed(2)} $`}</Box>

      </Box>
      <IconButton
        size="medium"
        sx={{
          height: 30, display: 'flex', alignSelf: 'center',
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
