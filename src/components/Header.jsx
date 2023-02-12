import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ cartCount }) => (
  <div className="header bg-dark text-light">
    <div>
      <h1 className="title">Mr. K's Kaps</h1>
    </div>
    <nav className="navbar">
      <ul className="nav-list">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>
            <i className="bi bi-cart2" />
            <span className="badge badge-warning" id="cart-count">
              {cartCount}
            </span>
          </li>
        </Link>
      </ul>
    </nav>
  </div>
);

Header.propTypes = {
  cartCount: PropTypes.number,
};

export default Header;
