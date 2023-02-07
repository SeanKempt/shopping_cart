import { Link } from 'react-router-dom';

const Header = () => (
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
          </li>
        </Link>
      </ul>
    </nav>
  </div>
);

export default Header;
