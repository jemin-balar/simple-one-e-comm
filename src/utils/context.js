import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCarCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    cartItems.map((item) => (count += item.attributes.quantity));
    setCarCount(count);

    let subTotal = 0;
    cartItems.map(
      (item) => (subTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    //product hase no cart to return index = -1
    // PRODUCT HAS TO CART TO RETURN INDEX = PRODUCT.INDEX EX.. FIRSTPRODUCT ADD SO INDEX HAS BEEN = 0 SECONDPRODUCT ADD SO INDEX HAS BEEN = 1 AND FIRSTPRODUCT ADD SO INDEX HAS BEEN = 0 MEANS PRODUCT INDEX RETURN
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    console.log(index);
    // PRODUCT ALREDY ADDED TO CART
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    }
    //PRODUCT FIRST TIME ADD
    else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };

  const handleRemovFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCarCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemovFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
