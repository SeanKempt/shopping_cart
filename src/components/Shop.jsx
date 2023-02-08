import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import { inventory } from '../helpers/inventory';

const Shop = ({ handleAddToCart }) => (
  <div className="wrapper">
    <main className="main-content-shop">
      {inventory.map((item) => (
        <ItemCard
          item={item}
          product={item.product}
          img={item.image}
          price={item.price}
          key={item.id}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </main>
  </div>
);

Shop.propTypes = {
  handleAddToCart: PropTypes.func,
};

export default Shop;
