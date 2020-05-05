import React from 'react';
import { useState,useEffect } from 'react';
import './Lunch.css';
import { Link } from 'react-router-dom';

const Lunch = () => {
     
    //  const food= fakeData.filter(item=>{
    //      return item.category==='lunch';
    //  });
     //const[lunch,setLunch]= useState([]);
     const[food,setFood]=useState([]);

     useEffect(()=>{
         fetch('https://morning-harbor-96274.herokuapp.com/foods')
         .then(res=>res.json())
         .then(data=>{
            console.log(data);
            setFood(data);
         })
     } ,[])
     const lunch=food.filter(item=>{
        return item.category==='lunch';
    })
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
                            <Link to={'/food/'+food.key} style={{textDecoration:'none', color:'inherit'}}>
                            <button type="button" className="btn btn-success">See Details</button>
                            </Link>
                    </div>
                </div> 
            )}
    </div>
        </div>
    );
};

export default Lunch;