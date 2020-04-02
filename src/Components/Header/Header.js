import React from 'react';
import logo from '../../images/logo2.png';
import './Header.css'
import { useAuth } from '../Login/useAuth';

const Header = () => {
  const auth =useAuth();
  console.log(auth);
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-white navbar-white sticky-top">

        <a className="navbar-brand" href="/">
          <img className="imgHead" src={logo} alt=""></img> 
        </a>

        <ul className="navbar-nav justify-content-right">
         { auth.user ? 
         <li className="nav-item">  
         <a className="nav-link" href="/" onClick={auth.signOut}> Sign Out </a> 
          </li> 
          :
          <li className="nav-item">
            <a className="nav-link" href="/login" >Login</a>
          </li>
          }

          <li className="nav-item">
            <a className="nav-link" href="/login" >Sign Up</a>
          </li>

        </ul>
      </nav>
      <div className="banner d-flex flex-column">

        <h1 className=' d-flex justify-content-center'>Best Food Waiting For Your Belly</h1>
        <br/>
        <div className="d-flex justify-content-center form">

        <form className="form-inline justify-content-center">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn  my-2 my-sm-0" style={{backgroundColor: 'crimson'}} type="submit">Search</button>
  </form>

        </div>

      </div>
    </div>


  );
}

export default Header;