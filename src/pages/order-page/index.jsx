import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';

import { ContactFields, OrderContainer, OrderFields } from './components';

const OrderSection = () => {
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState();
  const [city, setCity] = React.useState('');
  const [agreement, setAgreement] = React.useState(true);
  const [delivery, setDelivery] = React.useState();
  const [gender, setGender] = React.useState(null);

  return (
    <OrderContainer>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          width: { xs: '100%', md: '30%', xxl: '30%' },
          border: '1px solid black',
          p: 6,
          borderRadius: '4px',
        }}
      >
        <ContactFields
          fullname={fullname}
          email={email}
          gender={gender}
          city={city}
          setCity={setCity}
          setFullname={setFullname}
          setEmail={setEmail}
          setGender={setGender}
        />
        <OrderFields
          agreement={agreement}
          delivery={delivery}
          setAgreement={setAgreement}
          setDelivery={setDelivery}
        />

        <Button
          type="submit"
          variant="contained"
          size="small"
        >
          PRIEITI PRIE APMOKĖJIMO

        </Button>
      </Box>
    </OrderContainer>
  );
};

export default OrderSection;
