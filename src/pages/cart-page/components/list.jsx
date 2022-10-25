import * as React from 'react';
import {
  Box,
  Typography,
  Divider,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import Item from './item';
import Footer from './cart-footer';
import HouseService from '../../../services/house-service';
import useCart from '../../../hooks/useCart';

const getFormattedItems = async (cartItemsData) => {
  const idArr = cartItemsData.map((cartItem) => cartItem.id);
  const fetchedCartItems = await HouseService.fetchByIdArr(idArr);
  const fetchedItemsWithCount = fetchedCartItems.map((fetchedItem) => ({
    ...fetchedItem,
    count: cartItemsData.find((cartItem) => cartItem.id === fetchedItem.id)?.count ?? 0,
    startDate: cartItemsData.find((cartItem) => cartItem.id === fetchedItem.id)?.start_date ?? 0,
    endDate: cartItemsData.find((cartItem) => cartItem.id === fetchedItem.id)?.end_date ?? 0,
  }));

  return fetchedItemsWithCount;
};

const List = () => {
  const {
    cartItems: cartItemsData,
    deleteItem,
    addToCart,
  } = useCart();
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      if (cartItemsData.length > 0) {
        const formattedCartItems = await getFormattedItems(cartItemsData);
        setCartItems(formattedCartItems);
      } else {
        setCartItems([]);
      }
    })();
  }, [cartItemsData]);

  return (
    <Box sx={{
      display: 'flex', alignself: 'center', flexDirection: 'column',
    }}
    >
      <Box sx={{
        display: 'flex', alignself: 'center', flexDirection: 'column',
      }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ fontFamily: 'Montserrat' }}>Jūsų rezervacijos</Typography>
          <SpaIcon sx={{ color: 'common.dark', fontSize: 45 }} />
        </Box>
        <Link
          to="/shop"
          style={{
            color: '#1C3879', textDecoration: 'none', display: 'flex', gap: 7,
          }}
        >
          <KeyboardBackspaceIcon fontSize="small" />
          <Typography
            variant="h6"
            sx={{
              color: 'black', fontWeight: 700, fontSize: '14px', fontFamily: 'Montserrat',
            }}
          >
            Grįžti atgal
          </Typography>
        </Link>
        <Divider sx={{ pt: 3 }} />
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        >

          <Box sx={{ display: 'flex', justifyContent: 'right' }} />
        </Box>

        <Box sx={{
          display: 'flex', flexDirection: 'column', justifyContent: { xs: 'space-between', lg: 'right' },
        }}
        >
          {cartItems.map(({
            id,
            images,
            title,
            price,
            count,
            category,
            startDate,
            endDate,
          }) => (
            <Item
              key={id}
              images={images}
              title={title}
              count={count}
              startDate={Date.parse(startDate)}
              endDate={endDate ? Date.parse(endDate) : null}
              setCount={(date, which) => addToCart({
                id, count: 1, ob: date, w: which,
              })}
              price={price}
              textProps={[category.title]}
              deleteItem={() => deleteItem(id)}
            />
          ))}
        </Box>

        <Footer />
      </Box>
    </Box>
  );
};

export default List;
