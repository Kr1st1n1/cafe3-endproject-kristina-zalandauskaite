import * as React from 'react';
import {
  Box,
  Typography,
  Divider,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
  }));

  return fetchedItemsWithCount;
};

const List = () => {
  const {
    cartItems: cartItemsData,
    addToCart,
    deleteItem,
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

  const total = cartItems.reduce((prevSum, { count, price }) => prevSum + count * price, 0);

  return (
    <Box sx={{
      display: 'flex', alignself: 'center', width: '100%', flexDirection: 'column',
    }}
    >
      <Box sx={{
        display: 'flex', alignself: 'center', flexDirection: 'column',
      }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5">Prekių krepšelis</Typography>
          <ShoppingCartIcon sx={{ color: '#1C3879', fontSize: 45 }} />
        </Box>
        <Link
          to="/shop"
          style={{
            color: '#1C3879', textDecoration: 'none', display: 'flex', gap: 7,
          }}
        >
          <KeyboardBackspaceIcon fontSize="large" />
          <Typography variant="h6" sx={{ color: 'black', fontWeight: 700 }}>Grįžti atgal</Typography>
        </Link>
        <Divider sx={{ pt: 3, pb: 3 }} />
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: 2,
          pb: 2,
        }}
        >

          <Box sx={{ display: 'flex', justifyContent: 'right' }} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'right' }}>
          {cartItems.map(({
            id,
            images,
            title,
            price,
            count,
            category,
          }) => (
            <Item
              key={id}
              images={images}
              title={title}
              count={count}
              setCount={(newCount) => addToCart({ id, count: newCount })}
              price={price}
              textProps={[category.title]}
              deleteItem={() => deleteItem(id)}
            />
          ))}
        </Box>

        <Footer totalPrice={total} />
      </Box>
    </Box>
  );
};

export default List;
