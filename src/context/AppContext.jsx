import { createContext, useContext, useState } from "react";
import data from "../assets/data";

const menuContext = createContext();
const cartContext = createContext();

export function AppProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addToCart = (quantity, options, id) => {
    setCartList((prev) => [...prev, { quantity, options, id }]);
  };

  const removeFromCart = (id) => {
    setCartList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <menuContext.Provider value={{ menuList: data.menu }}>
      <cartContext.Provider value={{ cartList, addToCart, removeFromCart }}>
        {children}
      </cartContext.Provider>
    </menuContext.Provider>
  );
}

export function useMenuList() {
  return useContext(menuContext);
}

export function useCartList() {
  return useContext(cartContext);
}
