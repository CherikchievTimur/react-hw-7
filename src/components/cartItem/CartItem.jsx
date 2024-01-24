import React from "react";
import "./cartItem.style.css"

const CartItem = ({ product, onClickAddToCart, onClickDeleteFromCart }) => {

    const onClickAdd = () => {
        onClickAddToCart(product);
    }

    const onClickDelete = () => {
        onClickDeleteFromCart(product);
    }

    return <div className="cart-item">
        <p>{product.name}</p>
        <button className="button-box button-add" onClick={onClickAdd}>+</button>
        <p>{product.count}</p>
        <button className="button-box button-delete" onClick={onClickDelete}>-</button>
    </div>;
}

export default CartItem;