import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] =useState([])
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
            setDisplayProducts(data)
        
        });
        
    }, [])

    useEffect(() => {
       
       if(products.length){
        const savedCart =getStoredCart();
        const storedCart = []
        for(const key in savedCart){
               
               const addedProduct = products.find(product => product.key === key);
               if(addedProduct){
                
                const quantity = savedCart[key];
                addedProduct.quantity =quantity;
               
                storedCart.push(addedProduct)
            }
               }
              
           setCart(storedCart);
       }
    }, [products])

    const handlAddtoCart = (product) =>{
        // console.log(product)

        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
        
    }

    const handleSearch = event =>{
       const searchText = (event.target.value);
       const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
       setDisplayProducts(matchedProduct)
       console.log(matchedProduct.length)
    }
    return (
        <>
            <div className="search-container">
            <input type="text"
            onChange={handleSearch}
            placeholder=" Search Product" />
        </div>

        <div>
           <div className="shop-container">
               <div className="product-container">
                
                <h3 className='product-count'>Products: {products.length}</h3>

                {
                    displayProducts.map(product => <Product
                        
                        key ={product.key}
                        product={product} 
                        handlAddtoCart ={handlAddtoCart}               
                        ></Product>)
                }
            
               </div>
               <div className="cart-container">
                <Cart cart={cart}></Cart>
               </div>
           </div>
        </div>
        </>
    );
};

export default Shop;