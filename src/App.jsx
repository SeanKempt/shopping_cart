import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sass/styles.scss';
import { useState } from 'react';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Home from './components/Home';
import Layout from './components/Layout';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    // checks if the item is in the cart, if not it gets added
    const itemExists = cart.some((i) => i.product.id === item.id);
    if (!itemExists) {
      return setCart([...cart, { product: item, quantity: 1 }]);
    }
    // if the item is already in the cart, increase the quantity of that item by one
    handleIncrease(item);
  };

  const handleIncrease = (item) => {
    const itemIndex = cart.map((i) => i.product).indexOf(item);
    const newQuantity = cart.map((p, i) =>
      i === itemIndex ? { ...p, quantity: p.quantity + 1 } : p
    );
    return setCart(newQuantity);
  };
  const handleDecrease = (item) => {
    const itemIndex = cart.map((i) => i.product).indexOf(item);
    const newQuantity = cart.map((p, i) => {
      if (i === itemIndex) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
    return setCart(newQuantity);
  };

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
