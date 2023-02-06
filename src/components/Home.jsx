import Header from './Header.jsx';
import enterkey from '../images/Enterkey-ps.png';

const Home = () => (
  <div className="wrapper">
    <Header />
    <main className="main-content">
      <div className="hero container-fluid py-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-light display-1">Best Keyboard Caps Around!</h1>
        <p className="col-md-8 fs-4 text-light display-3 text-center">
          Quality made Keyboard caps at an affordable price.
        </p>
        <button type="button" className="btn">
          <img src={enterkey} className="shopImg" alt="enterkey" />
        </button>
      </div>
    </main>
    <footer className="footer bg-dark text-light">
      <p>Made by Sean Kempt</p>
    </footer>
  </div>
);

export default Home;
