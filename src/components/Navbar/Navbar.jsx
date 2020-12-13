import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="navbar-brand">Sydney Goodwill</div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li class="nav-item">
            <Link to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;