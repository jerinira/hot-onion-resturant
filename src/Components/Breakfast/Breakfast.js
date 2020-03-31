import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Breakfast = () => {

     const bfast= fakeData.filter(breakfast=>{
         return breakfast.category==='breakfast';        
     });
     const[breakfast,setBreakfast]= useState(bfast);
    return (
        <div>
            <div className="container">
            <div className="row d-flex row justify-content-around">
            {breakfast.map(food=>

            <div className="card lunch col-lg-3">                       
                           <img src={food.image} className="food-img" alt=""/>                      
                        <div className="card-body">
                        <h5 className="card-title">{food.food_name}</h5> 
                            <p className="card-text">{food.title}</p>
                            <h5>  <span style={{color:"red"}}> $ {food.price}</span></h5>
                            <button type="button" className="btn btn-outline-success"><Link to={'/food/'+food.key}>See Details</Link></button>
                    </div>
            
                </div> 
            )}
    </div>
        </div>
            
        </div>
    );
};

export default Breakfast;