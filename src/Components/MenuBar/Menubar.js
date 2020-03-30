import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div className="container row d-flex row justify-content-around">
            <div className="link">
            
            <b> <h5>
            <Link to="/breakfast" className='text-danger'>  Breakfast </Link>
            <Link to="/lunch" className='text-danger'>  Lunch </Link>
            <Link to="/dinner" className='text-danger'> Dinner </Link> </h5> </b> 
        </div>
        

        </div>
    );
};

export default Menubar;