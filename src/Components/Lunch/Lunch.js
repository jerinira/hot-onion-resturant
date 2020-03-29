import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData/data';
import './Lunch.css';

const Lunch = () => {
     const{lunch,setLunch}= useState(fakeData);
     const food= fakeData.filter(item=>{
         return item.category==='lunch';
     });
     console.log(food);
    return (
        <div className="container">
            <div className="row d-flex row justify-content-around">
            {food.map(food=>

            <div className="card lunch col-lg-3">                       
                           <img src={food.image} className="food-img" alt=""/>                      
                        <div className="card-body">
                        <h5 className="card-title">{food.food_name}</h5> 
                            <p className="card-text">{food.title}</p>
                            <h5>$ {food.price}</h5>
                    </div>
                </div> 
            )}
    </div>
        </div>
    );
};

export default Lunch;