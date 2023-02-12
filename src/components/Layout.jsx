import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ cartCount }) => (
  <div className="wrapper">
    <Header cartCount={cartCount} />
    <Outlet />
    <Footer />
  </div>
);

Layout.propTypes = {
  cartCount: PropTypes.number,
};

export default Layout;
