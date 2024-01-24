import React, { useState } from "react";
import "./cartApp.style.css";
import { productData } from "../../assets/data/productData";
import ProductCard from "../productCard/ProductCard";
import CartItem from "../cartItem/CartItem";

const CartApp = () => {
    const [productList, setProductList] = useState(productData);
    const [cartList, setCartList] = useState([]);

    const onClickAddToCart = (product) => {        
        const productExists = cartList.find((el) => el.name === product.name);

        if(productExists){
            setCartList(cartList.map((el) => el.name === product.name ? {...el, count: el.count + 1} : el));
        }
        else{
            setCartList([...cartList, {...product, count: 1}]);
        }
    }

    const onClickDeleteFromCart = (product) => {
        const productExists = cartList.find((el) => el.name === product.name);

        if(productExists){
            if(productExists.count > 1){
                setCartList(cartList.map((el) => el.name === product.name ? { ...el, count: el.count - 1 } : el));
            }
            else{
                setCartList([...cartList.filter((el) => el.name !== product.name)]);
            }
        }
    }

    return <div className="product-view">
        {cartList.length > 0 ?
            <div className="product-cart">
                <p>Items in cart: {cartList.length}</p>
                <div>
                    {cartList.map((el, index) => <CartItem key={index} product={el} onClickAddToCart={onClickAddToCart} onClickDeleteFromCart={onClickDeleteFromCart} />)}
                    <p>Total price: {cartList.reduce((sum, el) => sum + el.price * el.count, 0)} $</p>
                </div>
            </div> : null
        }
        <div className="product-cards">
            {productList.map((el, index) => <ProductCard key={index} product={el} onClickAddToCart={onClickAddToCart} /> )}
        </div>
    </div>;
}

export default CartApp;