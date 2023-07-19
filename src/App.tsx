import { Fragment } from 'react';
import './App.css';
// import Header from './Composants/Header';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <header> header </header>
      <ul>
        <li>
          <NavLink to="/"> Home</NavLink>
        </li>
        <li><NavLink to="/contact"> Contact </NavLink>
        </li>
      </ul>
      <Outlet />
      <p>footer </p>
    </Fragment>

  )
}

export default App;
