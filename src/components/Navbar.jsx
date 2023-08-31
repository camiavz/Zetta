import React from 'react';
import CartWidget from './CartWidget'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">Z E T T A</div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Surf</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Yoga</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Beach</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Skate</a>
          </li>
        </ul>
      </div>
      <CartWidget /> 
    </nav>
  );
}

export default Navbar;
