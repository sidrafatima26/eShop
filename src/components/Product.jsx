import React from 'react';
import './Product.css';
//import Bag from './bag.jpg'

function Product({id, title, price, rating, image}) {
  return (
    
    <div className='product'>
        <div className='product__info'>
            <p> {title} </p>
            <p className='product__price'> <small>$</small> <strong> {price} </strong> </p>
            <div className='product__rating'> { Array(rating).fill().map((_, i) => ( <p> 🌟 </p>)) }</div>
        </div>
        <img src={image} alt='bag'></img>
        <button>Add to Cart</button>
    </div>
    
  )
}

export default Product