import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';

const Breakfast = () => {

    const{breakfast,setBreakfast}= useState(fakeData);
     const bfast= fakeData.filter(breakfast=>{
         return breakfast.category==='breakfast';
         
     });
    return (
        <div>
            <div className="container">
            <div className="row d-flex row justify-content-around">
            {bfast.map(food=>

            <div className="card lunch col-lg-3">                       
                           <img src={food.image} className="food-img" alt=""/>                      
                        <div className="card-body">
                        <h5 className="card-title">{food.food_name}</h5> 
                            <p className="card-text">{food.title}</p>
                            <h5>  <span style={{color:"red"}}> $ {food.price}</span></h5>
                    </div>
                </div> 
            )}
    </div>
        </div>
            
        </div>
    );
};

export default Breakfast;