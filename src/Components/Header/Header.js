import React from 'react';
import logo from '../../images/logo2.png';
import background from '../../images/bannerbackground.png';
import './Header.css'
// import src from '*.bmp';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-white navbar-white sticky-top">

        <a className="navbar-brand" href="/">
          <img className="imgHead" src={logo} alt=""></img> 
        </a>

        <ul className="navbar-nav justify-content-right">
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup">Sign Up</a>
          </li>

        </ul>
      </nav>
      <div className="banner d-flex flex-column">

        <h1>Best Food Waiting For Your Belly</h1>
        <br/>
        <div className="d-flex justify-content-center form">

        <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>

        </div>

      </div>
    </div>


  );
}

export default Header;