import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dinner = () => {
     const dinnerItem= fakeData.filter(item=>{
         return item.category==='dinner';
     });
    const[dinner,setDinner]= useState(dinnerItem);
    //  console.log(dinner.length);
    return (
        <div className="container">
                <div className="row d-flex justify-content-around">
                    {dinner.map(food=>

            <div className="card lunch col-lg-3">                       
                           <img src={food.image} className="food-img" alt=""/>                      
                        <div className="card-body">
                        <h5 className="card-title">{food.food_name}</h5> 
                            <p className="card-text">{food.title}</p>
                            <h5>$ {food.price}</h5>
                            <Link to={'/food/'+food.key} style={{textDecoration:'none', color:'inherit'}}>
                            <button type="button" className="btn btn-outline-success">
                            See Details</button></Link>
                    </div>
            </div> 
            )}
    </div>
            
        </div>
    );
};

export default Dinner;