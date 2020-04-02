import React from 'react';
import './OrderComplete.css';
import image from '../../images/Group 1151.png';
import image1 from '../../images/Group 1152.png';
import map from '../../images/map.png';
import Auth from '../Login/useAuth';


const OrderComplete = () => {
    const auth = Auth();
    console.log(auth.user);
    return (
        <div className='order d-flex'>
            <div className="map">
            <img src={map} alt="..." />
            </div>
            <div className='user'>
                <div className='user-image'>
                    <img src={image} alt="" style={{height:'50%', width:"50%"}}/>
                </div>
                <h2>9:30</h2>
                <p className="text-mute"> Your Estimated delivery time</p>
                <div className='user-image'>
                <img src={image1} alt="" style={{height:'50%', width:"50%"}}/>
                {
                    auth.user?
                    <h3>{auth.user.name}</h3>
                    :
                    <h3></h3>
                }
                
                </div>
            </div>
        </div>
    );
};

export default OrderComplete;