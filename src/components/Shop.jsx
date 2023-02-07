import ItemCard from './ItemCard';
import { inventory } from '../helpers/inventory';

const Shop = () => (
  <div className="wrapper">
    <main className="main-content-shop">
      {inventory.map((item) => (
        <ItemCard
          product={item.product}
          img={item.image}
          price={item.price}
          key={item.id}
        />
      ))}
    </main>
  </div>
);

export default Shop;
