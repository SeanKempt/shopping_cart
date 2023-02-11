import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import ItemCartCard from './ItemCartCard';

const Cart = ({ cart, handleIncrease, handleDecrease }) => {
  if (cart.length <= 0) {
    return (
      <div className="wrapper">
        <h1>Your cart is empty!</h1>
      </div>
    );
  }
  return (
    <div className="wrapper">
      {cart.bag.map((item) => (
        // have to use item.property because of how object is stored within the cart array [{product, quantity}]
        <ItemCartCard
          key={item.product.id}
          productName={item.product.productName}
          price={item.product.price}
          img={item.product.image}
          quantity={item.quantity}
          item={item.product}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
      ))}
      <hr />
      <h2>Total: </h2>
      <Button className="checkout-btn" type="button">
        Checkout
      </Button>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object,
  handleDecrease: PropTypes.func,
  handleIncrease: PropTypes.func,
};

export default Cart;
