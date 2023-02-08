import PropTypes from 'prop-types';
import ItemCartCard from './ItemCartCard';

const Cart = ({ cart, handleIncrease, handleDecrease }) => (
  <div className="wrapper">
    {cart.length <= 0 ? (
      <h1>Your cart is empty!</h1>
    ) : (
      cart.map((item) => (
        // have to use item.property because of how object is stored within the cart array [{product, quantity}]
        <ItemCartCard
          key={item.product.id}
          product={item.product.product}
          price={item.product.price}
          img={item.product.image}
          quantity={item.quantity}
          item={item.product}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
      ))
    )}
  </div>
);

Cart.propTypes = {
  cart: PropTypes.array,
  handleDecrease: PropTypes.func,
  handleIncrease: PropTypes.func,
};

export default Cart;
