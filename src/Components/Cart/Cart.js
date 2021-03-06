import React from 'react';
import '../Details/Details'
import './Cart.css';
import { Link } from 'react-router-dom';
import { useState,useEffect} from 'react';
const Cart = () => {

    const[cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('https://morning-harbor-96274.herokuapp.comcart')
        .then(res=>res.json())
        .then(data=>{
           setCart(data);
           console.log(cart);
        })
    } ,[])
   
    return (
        <div className="d-flex justify-content-start">
           <div className="container cart-form">
            
  <form>
  <h3 className="heading">Edit delivery Details</h3>
    <input type="text" id="fname" name="firstname" placeholder="Name"/>
<br/>
    <input type="text" id="lname" name="lastname" placeholder="Address"/>
<br/>
    
    <input type="text" id="lname" name="lastname" placeholder="Flat No."/>
    <br/>
    <input type="submit" value="Save & Continue"></input>  

  </form>
</div>
 <div className="review">
    <h6>Arriving withing 30-40min...</h6>
     <h5>Sub-total:</h5>
     <h5>Tax:</h5>
     <h5>Delivery fee:</h5>
     <Link to='/order' style={{textDecoration:'none', color:'inherit'}}>
     <input id="save" type="submit" value="Place Order">
         </input></Link>

 </div>
            
    </div>
    );
}

export default Cart;