import React from 'react';
import './Item.css'
import fakeData from '../../fakeData'
import { useState } from 'react';
import Food from '../Food/Food';
import Lunch from '../Lunch/Lunch';
import { Link } from 'react-router-dom';

const Item = () => {
    // console.log(fakeData);
    const [item,setItem]=useState(fakeData);

    return (
    <div className="container row d-flex row justify-content-around">
            <div className="link">
            

                <Link to="/breakfast">  BreakFast </Link>
                <Link to="/lunch">  Lunch </Link>
                <Link to="/dinner"> Dinner </Link> 
            </div>

        {
            item.map(item=><Food food={item}></Food>)

        }
        
    </div>   
    );
};

export default Item;