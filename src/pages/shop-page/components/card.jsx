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
import useCart from '../../../hooks/useCart';
import Image from '../../../components/image';

const wait = (ms) => new Promise((res) => { setTimeout(() => res(), ms); });

const ItemCard = ({
  id,
  title,
  images,
  description,
  price,
  currency,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const { getItemCount, addToCart } = useCart();
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
              image={(images && images[0]) ?? '/no-img.jpg'}
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
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontSize: '18px',
              }}
            >
              {title}

            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontSize: '14px',
              }}
            >
              {`${price} ${currency}`}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: '12px',
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Box>

      <CardActions sx={{ p: 2, alignSelf: 'center', justifyContent: 'left' }}>
        <Button
          sx={{ fontSize: '12px' }}
          size="small"
          variant="contained"
          onClick={() => navigate(`/house/${id}`)}
        >
          More...
        </Button>
        <Button
          sx={{ fontSize: '12px' }}
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
