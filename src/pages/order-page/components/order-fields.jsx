import React from 'react';
import {
  Box,
  FormControlLabel,
  TextField,
  Checkbox,
  Autocomplete,
  FormControl,
  Divider,
} from '@mui/material';

const deliveryMethods = [
  {
    id: '1',
    label: 'Atsiųsti kuponą el.paštu',
  },
  {
    id: '2',
    label: 'Atsiųsti kuponą adresuotu paštu',
  },
  {
    id: '3',
    label: 'Pristatyti su kurjerių tarnyba',
  },
];

const OrderFields = ({
  agreement,
  delivery,
  setAgreement,
  setDelivery,
}) => (
  <>
    <Divider sx={{ fontSize: '14px' }} textAlign="left">Užsakymo informacija</Divider>
    <Box sx={{ alignItems: 'left' }}>
      <FormControlLabel
        control={(
          <Checkbox
            checked={agreement}
            onChange={(_, AgreementTerms) => setAgreement(AgreementTerms)}
          />
          )}
        label="Aš sutinku su paslaugų teikimo sąlygomis"
      />
    </Box>
    <Box align="center">
      <Autocomplete
        disablePortal
        options={deliveryMethods}
        value={delivery}
        key={delivery}
        onChange={(_, newDelivery) => setDelivery(newDelivery)}
        sx={{ width: '100%' }}
        renderInput={({
          InputLabelProps,
          InputProps,
          inputProps,
          disabled,
          fullWidth,
          id,
          size,
        }) => (
          <TextField
            label="Pristatymo sąlygos"
            InputLabelProps={InputLabelProps}
            InputProps={InputProps}
            inputProps={inputProps}
            disabled={disabled}
            fullWidth={fullWidth}
            id={id}
            size={size}
          />
        )}
      />
    </Box>
    <FormControl />
  </>
);

export default OrderFields;
