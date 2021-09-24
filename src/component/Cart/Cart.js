import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart} = props;

    // const totalReducer =(previous, product) => previous + product.price;
    // const total =cart.reduce(totalReducer, 0)

    let totalQuantity = 0
    let total = 0;
    for(const product of cart){
          console.log(product)
          if(!product.quantity){
              product.quantity = 1;
          }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;

    }
    const shipping = total > 0 ? 15:0;
    const tax = (total+shipping) /10;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
             <h3 className='order-summary'>Order Summary</h3>
                 <h4>Items Orders : {totalQuantity}</h4>
                 <p>Total : {total.toFixed(2)} </p>
                 <p>Shipping : {shipping.toFixed(2)}</p>
                 <p>Tax : {tax.toFixed(2)}</p>
                 <p>Grand Total : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;