import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sass/styles.scss';
import { useState, useEffect } from 'react';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Home from './components/Home';
import Layout from './components/Layout';

const App = () => {
  const [cart, setCart] = useState({ bag: [], total: 0 });

  const handleAddToCart = (item) => {
    // checks if the item is in the cart, if not it gets added
    const itemExists = cart.bag.some((i) => i.product.id === item.id);
    if (!itemExists) {
      return setCart({
        ...cart,
        bag: [...cart.bag, { product: item, quantity: 1 }],
      });
    }
    // if the item is already in the cart, increase the quantity of that item by one
    handleIncrease(item);
  };

  // each item gets multiplied by the quantity of the item in the cart and then gets added together to give the total value.
  const getTotal = () => {
    setCart((pendingCart) => {
      const cartTotal = pendingCart.bag
        .map((item) => item.product.price * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      return { ...pendingCart, total: cartTotal };
    });
  };

  const handleIncrease = (item) => {
    const itemIndex = cart.bag.map((i) => i.product).indexOf(item);
    const newQuantity = {
      ...cart,
      bag: cart.bag.map((p, i) =>
        i === itemIndex ? { ...p, quantity: p.quantity + 1 } : p
      ),
    };
    return setCart(newQuantity);
  };
  const handleDecrease = (item) => {
    const itemIndex = cart.bag.map((i) => i.product).indexOf(item);
    const newQuantity = {
      ...cart,
      bag: cart.bag.map((p, i) =>
        i === itemIndex ? { ...p, quantity: p.quantity - 1 } : p
      ),
    };
    return setCart(newQuantity);
  };

  // didn't have to use useEffect. Could've used just the reduce and map to find the cart total.
  useEffect(() => {
    getTotal();
  }, [cart.bag]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="shop"
            element={<Shop handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="cart"
            element={
              <Cart
                cart={cart}
                handleDecrease={handleDecrease}
                handleIncrease={handleIncrease}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
