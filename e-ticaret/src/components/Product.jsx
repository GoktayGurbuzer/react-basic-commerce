import React from 'react';
import '../css/Product.css';
import {useNavigate} from "react-router-dom";

const Product = ({product}) => {
    const { id, price, image, title, description } = product;
    const navigate = useNavigate();

    return (
        <div className="card">
            <img className="image" src={image} alt=""/>
            <div>
                <h2>{title}</h2>
                <h3>{price} TL</h3>
                <p>{description}</p>
                <button onClick={() => navigate(`product-details/${id}`)} className="button">İncele</button>
            </div>
        </div>
    );
};

export default Product;