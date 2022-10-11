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
          width: { xs: '100%', md: '50%', xxl: '50%' },
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
          size="large"
        >
          PRIEITI PRIE APMOKĖJIMO

        </Button>
      </Box>
    </OrderContainer>
  );
};

export default OrderSection;
