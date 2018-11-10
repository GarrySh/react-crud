import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
      Navbar
    </a>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/products/">
            View products
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/products/new">
            Create product
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
