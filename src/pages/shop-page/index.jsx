import * as React from 'react';
import {
  Grid,
  Typography,
  Container,
  Box,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import CardService from '../../services/card-service';
import { ItemCard, Filters } from './components';

const drawerWidth = 300;

const ShopPage = () => {
  const [houses, setHouses] = React.useState([]);
  const [searchParams] = useSearchParams();

  const handleFetchItems = React.useCallback(async () => {
    const fetchedItems = await CardService.fetchAll(searchParams.toString());
    setHouses(fetchedItems);
  }, [searchParams]);

  const handleUpdateItems = async () => {
    await handleFetchItems();
  };

  React.useEffect(() => {
    handleFetchItems();
  }, [handleFetchItems]);

  return (
    <Container maxWidth="false" sx={{ maxWidth: 1400 }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        pb: 4,
      }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontSize: '1rem',
            py: 3,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem voluptate, accusamus
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontSize: '0.9rem',
            py: 3,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem voluptate, accusamus
        </Typography>

        <Filters drawerWidth={drawerWidth} />

        {houses.length > 0 ? (
          <Grid container spacing={4}>
            {houses.map(({
              id,
              title,
              description,
              category,
              img,
              price,
              currency,
            }) => (
              <Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={3}>
                <ItemCard
                  id={id}
                  title={title}
                  description={description}
                  category={category}
                  img={img}
                  price={price}
                  currency={currency}
                  updateItem={handleUpdateItems}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography
            variant="h3"
            sx={{
              width: '100%',
              textAlign: 'center',
              color: 'error.main',
            }}
          >
            No requested items
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default ShopPage;
