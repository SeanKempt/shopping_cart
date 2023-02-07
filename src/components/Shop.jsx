import Header from './Header';
import Footer from './Footer';
import ItemCard from './ItemCard';
import { inventory } from '../helpers/inventory';

const Shop = () => (
  <div className="wrapper">
    <Header />
    <main className="main-content-shop">
      {inventory.map((item) => (
        <ItemCard product={item.product} img={item.image} price={item.price} />
      ))}
    </main>
    <Footer />
  </div>
);

export default Shop;
