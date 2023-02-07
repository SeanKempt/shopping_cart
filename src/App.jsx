import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sass/styles.scss';

const App = () => (
  <div className="App">
    <Outlet />
  </div>
);

export default App;
