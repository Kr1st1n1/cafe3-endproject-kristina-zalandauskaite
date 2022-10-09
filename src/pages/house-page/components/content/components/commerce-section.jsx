import React from 'react';
import { Box, Typography } from '@mui/material';
import AmountField from '../../../../../components/amount-field';
import useCart from '../../../../../hooks/useCart';

const CommerceSection = ({ house }) => {
  const {
    getItemCount,
    addToCart,
    changeCartItemCount,
    deleteItem,
  } = useCart();
  const count = getItemCount(house.id);

  const increaseHouseCount = () => {
    const cartItem = { id: house.id, count: count + 1 };

    if (count === 0) addToCart(cartItem);
    else changeCartItemCount(cartItem);
  };

  const decreaseHouseCount = () => {
    if (count - 1 === 0) deleteItem(house.id);
    else changeCartItemCount({ id: house.id, count: count - 1 });
  };

  return (
    <Box component="pre">
      <Typography variant="h4" sx={{ mb: 4 }}>Užsakymas</Typography>
      <Box sx={{ display: 'flex', gap: 6 }}>
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>Norimas dienų skaičius:</Typography>
          <AmountField
            amount={count}
            onInc={increaseHouseCount}
            onDec={decreaseHouseCount}
            min={0}
          />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>Viso:</Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>{`${count * house.price}${house.currency}`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CommerceSection;
