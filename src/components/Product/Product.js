import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (Props) => {
 
   const {product, handleAddToCart}=Props;
    const {name,img,price,seller,ratings} = Props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
           <div className='product-para'>
           <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} start</p>
           </div>
            
            </div>
            <button onClick={() =>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;