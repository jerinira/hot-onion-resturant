import React from 'react';
import { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Dinner = () => {
    //  const dinnerItem= fakeData.filter(item=>{
    //      return item.category==='dinner';
    //  });
    // const[dinner,setDinner]= useState(dinnerItem);
    // //  console.log(dinner.length);

    const[food,setFood]=useState([]);

    useEffect(()=>{
        fetch('https://morning-harbor-96274.herokuapp.com/foods')
        .then(res=>res.json())
        .then(data=>{
           setFood(data);
        })
    } ,[])
    const dinner=food.filter(item=>{
       return item.category==='dinner';
   })

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