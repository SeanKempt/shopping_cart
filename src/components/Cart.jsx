import PropTypes from 'prop-types';
import ItemCartCard from './ItemCartCard';

const Cart = ({ cart }) => (
  <div className="wrapper">
    <h1>Your cart is empty!</h1>
    {cart.map((item) => (
      <ItemCartCard
        product={item.product}
        price={item.price}
        img={item.image}
      />
    ))}
  </div>
);

Cart.propTypes = {
  cart: PropTypes.object,
};

export default Cart;
