import React from 'react';
import './Food.css'
import { Link } from 'react-router-dom';

const Food = (props) => {
    const {image,food_name,title,price,key}= props.food;
    return (
        <div className="container">
    
        <div className="row d-flex justify-content-around">
                <div className="card lunch col-sm-4">                       
                           <img src={image} className="food-img" alt=""/>                      
                        <div className="card-body">
                        <h5 className="card-title">{food_name}</h5> 
                            <p className="card-text">{title}</p>
                            <h5>$ {price}</h5>
                            {/* <button type="button" 
                           onClick={()=>props.handleDetails(props.food)} className="btn btn-success">See Details...</button> */}
                           { props.showButton &&
         <button type="button" className="btn btn-outline-secondary btn1"><Link to={'/food/'+key}>See Details</Link></button>}
                    </div>
                </div> 
        
    </div>
    </div>
    );
};

export default Food;