import React from 'react';
import logo from '../../images/logo2.png';
import background from '../../images/bannerbackground.png';
import './Header.css'

const Header = () => {
    return (   
<div>
<nav className="navbar navbar-expand-sm bg-white navbar-white">
  
  <a className="navbar-brand" href="/login">
    <img className="img" src={logo} alt=""></img> </a>

  <ul className="navbar-nav justify-content-right">
    <li className="nav-item">
      <a className="nav-link" href="/login">Login</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/signup">Sign Up</a>
    </li>
    
  </ul>
</nav>
<div>
    
  <img  src={background} alt="" className="fit" >
   </img>
</div>
</div>  


    );
}

export default Header;