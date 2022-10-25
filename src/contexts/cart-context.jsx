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
        setItems(cartItems.map((x) => (x.id === item.id
          ? {
            ...x,
            count: 1,
            start_date: ((item.w === 1) ? item.ob : x.start_date),
            end_date: ((item.w === 2) ? item.ob : x.end_date),
          } : x)));
      } else {
        setItems([...cartItems, {
          id: item.id, count: 1, start_date: new Date().toLocaleString('en-US', { timeZone: 'Europe/Vilnius' }), end_date: null,
        }]);
      }
    },

    getItemCount: (id) => cartItems.find((x) => x.id === id)?.count ?? 0,

    /* changeCartItemCount: ({ id, count }) => setItems(
      alert('test'),
      cartItems.map((x) => (x.id === id ? { id, count } : x)),
    ), */

    deleteItem: (id) => setItems(cartItems.filter((x) => x.id !== id)),

  }), [cartItems, setItems]);

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
