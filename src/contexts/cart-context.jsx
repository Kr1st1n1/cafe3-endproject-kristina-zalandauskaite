import * as React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setItems] = useLocalStorage('cartItems', []);

  const cartContextValue = React.useMemo(() => ({
    cartItems,

    cartItemsCount: cartItems.reduce((sum, { count }) => sum + count, 0),

    totalCount: cartItems.reduce((prevSum, { count, price }) => prevSum + count * price, 0),

    addToCart: (item) => {
      if (cartItems.find((x) => x.id === item.id)) {
        setItems(cartItems.map((x) => (x.id === item.id ? { ...x, count: item.count } : x)));
      } else {
        setItems([...cartItems, item]);
      }
    },

    getItemCount: (id) => cartItems.find((x) => x.id === id)?.count ?? 0,

    changeCartItemCount: ({ id, count }) => setItems(
      cartItems.map((x) => (x.id === id ? { id, count } : x)),
    ),

    deleteItem: (id) => setItems(cartItems.filter((x) => x.id !== id)),

  }), [cartItems, setItems]);

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
