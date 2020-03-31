import React from 'react';
import './Details.css';
import buttonLogo from '../../ICON/Path1.png'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

const Details = () => {
    const {key}=useParams();
    const foodDetails= fakeData.find(fd=>fd.key === key);
    const [count, setCount]= useState(1);
    const add=()=>{
      const newCount = count +1;
       return setCount(newCount);
    }
    const sub=()=>{
      const newCount = count-1 ;
      newCount >0 ? setCount(newCount): setCount(1);
      
      //  return setCount(newCount);
    }

    const price= (foodDetails.price * count).toFixed(2);

    return (
        <div className="d-flex justify-content-center">
<div className="details" style={{maxWidth:'800px'}}>
  <div className="row no-gutters ">
  <div class="col-md-7">
      <div class="card-body">
        <h2 class="card-title">{foodDetails.food_name}</h2>
            <p class="card-text">{foodDetails.about}</p>
            <h3>$ {price}</h3>
            <br/>
            <button className="icon-button" onClick={sub}> <FontAwesomeIcon icon={faMinus} />
            </button>
                <input type='digit' className="input" value={count}/>
                
                <button className="icon-button" onClick= {add}><FontAwesomeIcon icon={faPlus} /></button>
                <br/> <br/>
                <button className="add-button"> <img src={buttonLogo} alt=""/> Add Cart </button>
                <br/>

      </div>
    </div>
    <div class="col-md-5">
      <img src={foodDetails.image} className="img" alt=""/>
    </div>
    
  </div>
</div>

        </div>
    );
};

export default Details;