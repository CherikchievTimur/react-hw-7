import React from "react";
import "./productCard.style.css";

const ProductCard = ({ product, onClickAddToCart }) => {
    const { name, imageUrl, description, inStock, price} = product;

    const onClickAdd = () => {
        onClickAddToCart(product);
    }

    return <div className="product-card">
        <h3 className="product-cart-name">{name}</h3>
        <div className="product-card-image">
            <img src={imageUrl} alt={name} />
        </div>
        <h4 className="product-card-description">{description}</h4>
        <div className="product-card-cart">
            <h4>{price} $</h4>
            <button className="button" onClick={onClickAdd}>Add</button>
        </div>
    </div>
}

export default ProductCard;