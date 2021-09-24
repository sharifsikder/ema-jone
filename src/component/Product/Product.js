import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    console.log(props.product)
    const {name, img, seller, stock, price} =props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='products'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-details' >
            <h3 className='product-name'>{name}</h3>
            <p className='price'>Price : {price}</p>
            <p className='price'>Only {stock} left in stock-order soon</p>
            <p ><small>by : {seller}</small></p>
            <button onClick={ () => props.handlAddtoCart(props.product)} className='btn-regular'>{element} Add to Cart</button>          
            </div>

        </div>
    );
};

export default Product;