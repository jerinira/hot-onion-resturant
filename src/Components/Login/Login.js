import React from 'react';
import logo from '../../images/logo2.png';
import './Login.css';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    console.log(auth.user);
    return (
        <div className="justify-content-center login-container">
            
            <form className="login justify-content-center">
            <img className="imgHead" src={logo} alt=""></img> 
            <br/>
              <input type="text"  id="fname" name="name" placeholder="Name"/>
              <br/>
              <input type="text" id="lname" name="email" placeholder="Email"/>
             <br/>
              
              <input type="password" id="lname" name="lastname" placeholder="Password"/>
              <br/>
              
              <input type="password" id="lname" name="lastname" placeholder="Confrim Password"/>

              <br/>
              <input onClick={auth.signInWithGoogle} type="submit" value="Sign in with Google"></input>
              <br/>
              <p> <span style={{color:'crimson', textAlign:'center'}}> <b>Already have an account</b></span> </p>
            </form>
          
            
        </div>
    );
};

export default Login;