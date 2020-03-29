import React from 'react';

const Food = (props) => {
    // console.log(props.food);
    const {image,food_name,title,price}= props.food;
    return (
    <div className="container">
        <div className="row  justify-content-around">
                <div className="card d-flex lunch col-sm-4">                       
                           <img src={image} className="food-img" alt=""/>                      
                        <div className="card-body">
                        <h5 className="card-title">{food_name}</h5> 
                            <p className="card-text">{title}</p>
                            <h5>$ {price}</h5>
                    </div>
                </div> 
        </div>
    </div>
    );
};

export default Food;