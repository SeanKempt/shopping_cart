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
import item1 from './images/keycaps1.jpg'; // remove and replace with proper items.

const App = () => {
  const [cart, setCart] = useState([
    { id: 0, product: 'Japanese Key Caps', price: `$${20.99}`, image: item1 }, // remove and leave it as a blank array
  ]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart cart={cart} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
