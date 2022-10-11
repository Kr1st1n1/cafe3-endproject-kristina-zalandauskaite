import React from 'react';
import {
  TextField,
  MenuItem,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  Divider,
} from '@mui/material';

const cities = [
  {
    value: 'Vilnius',
    label: 'Vilnius',
  },
  {
    value: 'Kaunas',
    label: 'Kaunas',
  },
  {
    value: 'Šiauliai',
    label: 'Šiauliai',
  },
  {
    value: 'Klaipdėda',
    label: 'Klaipdėda',
  },
];

const genders = [
  { value: 'female', label: 'Ponia' },
  { value: 'male', label: 'Ponas' },
  { value: 'other', label: 'Kita' },
];

const ContactFields = ({
  fullname,
  email,
  gender,
  city,
  setFullname,
  setEmail,
  setGender,
  setCity,
}) => (
  <>
    <Divider textAlign="left">Kontaktinė informacija</Divider>

    <TextField
      name="pilnas vardas"
      label="pilnas vardas"
      variant="filled"
      fullWidth
      onChange={(event) => setFullname(event.target.value)}
      value={fullname}
    />
    <TextField
      name="E-paštas"
      label="E-paštas"
      variant="filled"
      fullWidth
      onChange={(event) => setEmail(event.target.value)}
      value={email}
    />
    <TextField
      name="Miestas"
      select
      label="Miestas"
      variant="filled"
      fullWidth
      onChange={(event) => setCity(event.target.value)}
      value={city}
    >
      {cities.map(
        ({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>,
      )}
    </TextField>

    <FormControl sx={{ width: '100%' }}>
      <RadioGroup
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
        name="lytis"
        value={gender}
        key={gender}
        onChange={(_, newGender) => setGender(newGender)}
      >
        {genders.map(({ value, label }) => (
          <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
        ))}
      </RadioGroup>
    </FormControl>
  </>
);

export default ContactFields;
