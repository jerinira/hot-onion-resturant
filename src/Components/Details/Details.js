import React from 'react';
import './Details.css';
import buttonLogo from '../../ICON/Path1.png'
import { useParams, Link } from 'react-router-dom';
import { useState} from 'react';
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Details = () => {
  const { key } = useParams();
  // const [foodItem, setFoodItem] = useState([]);
  const foodDetails = fakeData.find(fd => {
    return fd.key === key
  });



  //   useEffect(()=>{
  //     fetch('https://morning-harbor-96274.herokuapp.com/food/'+key)
  //     .then(res=>res.json())
  //     .then(data=>{
  //        console.log(data);
  //        setFoodItem(data);
  //        console.log(foodItem);
  //     })
  // } ,[key]);

  // const foodDetails= foodItem.find(fd=>{
  //   return fd.key === key});


  const [food, setFood] = useState({
    nPrice: '',
    nQuantity: '',
    fName: '',
    nImage: ''

  });

  const [count, setCount] = useState(1);
  //const [cart,setCart]=useState([]);
  const add = () => {
    const newCount = count + 1;
    return setCount(newCount);

  }
  const sub = () => {
    const newCount = count - 1;
    newCount > 0 ? setCount(newCount) : setCount(1);
  }

  const price = Number((foodDetails.price * count).toFixed(2));


  const handleCart = () => {
    // console.log('cart', price);
    const details = {
      nPrice: price,
      nQuantity: count,
      fName: foodDetails.food_name,
      nImage: foodDetails.image
    }
    setFood(details);

    fetch('https://morning-harbor-96274.herokuapp.com/addCart',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)
      })
      .then(res => res.json())
      .then(data => { console.log("successfully added", data) })
  }



  return (
    <div className="d-flex justify-content-center">

      <div className="details" style={{ maxWidth: '800px' }}>
        <div className="row no-gutters ">
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title">{foodDetails.food_name}</h2>
              <p className="card-text">{foodDetails.about}</p>
              <h3>$ {price}</h3>
              <br />
              <button className="icon-button" onClick={sub}> <FontAwesomeIcon icon={faMinus} />
              </button>
              <input type='digit' className="input" value={count} />
              <button className="icon-button" onClick={add}><FontAwesomeIcon icon={faPlus} /></button>
              <br /> <br />

              <Link to='/cart' style={{ textDecoration: 'none', color: 'inherit' }}>
                <button className="add-button" onClick={handleCart}> <img src={buttonLogo} alt="" />Add Cart </button>
              </Link>
              <br />
            </div>
          </div>
          <div class="col-md-5">
            <img src={foodDetails.image} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;