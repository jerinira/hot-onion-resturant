import React from 'react';
import './Details.css';
import buttonLogo from '../../ICON/Path1.png'
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

const Details = () => {
    const {key}=useParams();
    const foodDetails= fakeData.find(fd=>fd.key === key);
    console.log(foodDetails);
    return (
        <div className="d-flex justify-content-center">
<div className="details" style={{maxWidth:'800px'}}>
  <div className="row no-gutters ">
  <div class="col-md-7">
      <div class="card-body">
        <h2 class="card-title">{foodDetails.food_name}</h2>
            <p class="card-text">{foodDetails.about}</p>
            <h3>$ {foodDetails.price}</h3>
            <br/>
            <button> <FontAwesomeIcon icon={faMinus} />
            </button>
                <input type="text" value='1'/>
                
                <button><FontAwesomeIcon icon={faPlus} /></button>
                <br/> <br/>
                <button className="btn btn-danger"> <img src={buttonLogo} alt=""/> </button>

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