import React from 'react';
import './Item.css'
import fakeData from '../../fakeData'
import { useState } from 'react';
import Food from '../Food/Food';


const Item = () => {
    const [item,setItem]=useState(fakeData);
    const handleDetails=(item)=>{
        console.log('details here', item);
    }

    return (
    <div className="container row d-flex row justify-content-around">
            
        {
            item.map(item=><Food 
                showButton={true}
                handleDetails={handleDetails}
                food={item}></Food>)

        }
        
        
    </div>   
    );
};

export default Item;