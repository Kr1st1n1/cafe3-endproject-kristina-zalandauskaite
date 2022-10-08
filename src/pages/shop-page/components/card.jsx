import * as React from 'react';
import {
  Typography,
  Card,
  Box,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../../contexts/cart-context';
import Image from '../../../components/image';

const wait = (ms) => new Promise((res) => { setTimeout(() => res(), ms); });

const ItemCard = ({
  id,
  title,
  img,
  description,
  price,
  currency,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const { getItemCount, addToCart } = React.useContext(CartContext);
  const itemCountInCart = getItemCount(id);
  const [count, setCount] = React.useState(itemCountInCart === 0 ? 1 : itemCountInCart);

  React.useEffect(() => {
    (async () => {
      setCount(itemCountInCart === 0 ? 1 : itemCountInCart);
      setLoading(true);
      await wait(1000);
      setLoading(false);
    })();
  }, [itemCountInCart]);

  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    >
      <Box>

        <Box sx={{
          position: 'relative',
          width: '100%',
          pt: '100%',
        }}
        >
          { loading ? (
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              p: 5,
            }}
            >
              <Image src="/loading.gif" />
            </Box>
          ) : (
            <CardMedia
              component="img"
              height="140"
              image={img}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
              }}
            />
          )}

        </Box>
        <CardContent>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 2,
          }}
          >
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h5" component="div">
              {`${price} ${currency}`}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Box>

      <Button
        sx={{ alignSelf: 'center', justifyContent: 'center' }}
        size="small"
        variant="contained"
        onClick={() => navigate(`/item/${id}`)}
      >
        More...
      </Button>

      <CardActions sx={{ p: 2, alignSelf: 'center', justifyContent: 'center' }}>
        <Button
          size="small"
          variant="contained"
          onClick={() => addToCart({ id, count })}
          disabled={count === itemCountInCart}
        >
          Add to cart

        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
