import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Alert } from '@mui/material';
import HouseService from '../../services/house-service';
import { Content } from './components';

const HousePage = () => {
  const { houseId } = useParams();
  const [house, setHouse] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        const fetchedHouse = await HouseService.fetchById(houseId);
        setHouse(fetchedHouse);
      } catch (error) {
        setErrorMsg(`Nerastas produktas pagal id: '${houseId}'`);
      }
    })();
  }, [houseId]);

  return (
    <Box sx={{ mt: 4, mx: 4 }}>
      {errorMsg && (<Alert severity="error">{errorMsg}</Alert>)}
      {house && <Content house={house} />}
    </Box>
  );
};

export default HousePage;
