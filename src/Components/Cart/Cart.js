import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className="d-flex justify-content-start">
            <div class="container cart-form">
            
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
     <input id="save" type="submit" value="Place Order"></input>

 </div>
            
    </div>
    );
};

export default Cart;