import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData/data';
import './Lunch.css';
import { Link } from 'react-router-dom';

const Lunch = () => {
     
     const food= fakeData.filter(item=>{
         return item.category==='lunch';
     });
     const[lunch,setLunch]= useState(food);
    return (
        <div className="container">
            <div className="row d-flex row justify-content-around">
            {lunch.map(food=>

            <div className="card lunch col-lg-3">                       
                           <img src={food.image} className="food-img" alt=""/>                      
                        <div className="card-body">
                        <h5 className="card-title">{food.food_name}</h5> 
                            <p className="card-text">{food.title}</p>
                            <h5>$ {food.price}</h5>
                            <button type="button" className="btn btn-outline-success">
                            <Link to={'/food/'+food.key}>See Details</Link></button>
                    </div>
                </div> 
            )}
    </div>
        </div>
    );
};

export default Lunch;