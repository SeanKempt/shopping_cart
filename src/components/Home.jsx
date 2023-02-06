import Header from './Header.jsx';

const Home = () => (
  <div className="wrapper">
    <Header />
    <main className="main-content">
      <div className="hero container py-5 rounded-3 mb-4">
        <h1>Best Keyboard Caps Around!</h1>
        <p className="col-md-8 fs-4">
          Quality made Keyboard caps at an affordable price. Always comes with a
          complimentary key puller.
        </p>
        <button type="button" className="btn btn-primary btn-lg">
          Shop Keycaps
        </button>
      </div>
    </main>
    <footer className="footer">
      <p>Made by Sean Kempt</p>
    </footer>
  </div>
);

export default Home;
