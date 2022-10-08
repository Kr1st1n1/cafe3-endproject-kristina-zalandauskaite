import * as React from 'react';
import {
  Box,
  Typography,
  Divider,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import { Item, Footer } from './components';
import CartContext from '../../../../contexts/cart-context';
import CardService from '../../../../services/card-service';

const getFormattedItems = async (cartItemsData) => {
  const idArr = cartItemsData.map((cartItem) => cartItem.id);
  const fetchedCartItems = await CardService.fetchByIdArr(idArr);
  const fetchedItemsWithCount = fetchedCartItems.map((fetchedItem) => ({
    ...fetchedItem,
    count: cartItemsData.find((cartItem) => cartItem.id === fetchedItem.id)?.count ?? 0,
  }));

  return fetchedItemsWithCount;
};

const ListSection = () => {
  const {
    cartItems: cartItemsData,
    addToCart,
    deleteItem,
  } = React.useContext(CartContext);
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
          <Typography variant="h5">Shopping Cart</Typography>
          <ShoppingCartIcon sx={{ color: '#1C3879', fontSize: 45 }} />
        </Box>
        <Link to="/shop" style={{ textDecoration: 'none', display: 'flex', gap: 7 }}>
          <KeyboardBackspaceIcon fontSize="large" />
          <Typography variant="h6">Continue Shopping</Typography>
        </Link>
        <Divider sx={{ pt: 3, pb: 3 }} />
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: 2,
          pb: 2,
        }}
        >
          <Typography variant="h6">Product details</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'right' }}>
            <Box
              minWidth={420}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                pt: 2,
                pb: 2,
                gap: 12,
              }}
            >
              <Typography variant="h6">Qty</Typography>
              <Typography variant="h6">Price</Typography>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">Remove</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'right' }}>
          {cartItems.map(({
            id,
            img,
            title,
            price,
            count,
            category,
          }) => (
            <Item
              key={id}
              img={img}
              title={title}
              count={count}
              setCount={(newCount) => addToCart({ id, count: newCount })}
              price={price}
              category={[category.label]}
              deleteItem={() => deleteItem(id)}
            />
          ))}
        </Box>

        <Footer totalPrice={total} />
      </Box>
    </Box>
  );
};

export default ListSection;
