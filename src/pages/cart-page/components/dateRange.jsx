import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, Typography } from '@mui/material';

const DateRange = () => {
  const [checkInDate, setCheckInDate] = React.useState(null);
  const [checkOutDate, setCheckOutDate] = React.useState(null);

  const day = moment(checkOutDate).diff(moment(checkInDate), 'days');

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  return (
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
          {day}
          .
        </Box>
      )}

    </Box>
  );
};
export default DateRange;
