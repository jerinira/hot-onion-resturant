import React from 'react';
import './Menubar.css';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div className="container row d-flex row justify-content-around">
            <div className="link justify-content-center">
            
            <b> <h5>
            <Link to="/breakfast" className='text-danger active'>  Breakfast </Link>
            <Link to="/lunch" className='text-danger active'>  Lunch </Link>
            <Link to="/dinner" className='text-danger'> Dinner </Link> </h5> </b> 
        </div>
        

        </div>
    );
};

export default Menubar;