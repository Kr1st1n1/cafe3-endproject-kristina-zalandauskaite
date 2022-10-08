import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Alert,
} from '@mui/material';
import CardService from '../../services/card-service';

const ItemPage = () => {
  const { itemId } = useParams();

  const [item, setItem] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        const fetchedItems = await CardService.fetchById(itemId);
        setItem(fetchedItems);
      } catch (error) {
        setErrorMsg(`no item found by id: '${itemId}'`);
      }
    })();
  }, [itemId]);

  return (
    <Container>
      {errorMsg && (<Alert severity="error">{errorMsg}</Alert>)}
      {item && (<pre>{JSON.stringify(item, null, 4)}</pre>)}
    </Container>
  );
};

export default ItemPage;
