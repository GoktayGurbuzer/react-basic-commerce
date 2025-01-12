import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedProduct} from "../redux/silces/productSlice.jsx";
import {CiCirclePlus, CiCircleMinus} from "react-icons/ci";
import {addToBasket, calculateBasket} from "../redux/silces/basketSlice.jsx";

const ProductDetails = () => {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { price, image, title, description } = selectedProduct;
    const [count, setCount] = useState(1);

    const dispatch = useDispatch();

    const increment = () => {
        if(count < 20){
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }

    const handleInputChange = (event) => {
        const newValue = parseInt(event.target.textContent);
        if (!isNaN(newValue)) {
            setCount(newValue);
        }
    };

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }

        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = () => {
       products && products.map((product) => {
           if(product.id == id) {
               dispatch(setSelectedProduct(product));
           }
       })
    }

    return (
        <div style={{display: "flex", flexDirection: "row", gap: "10px", marginTop: "50px"}}>
            <div style={{width: "40%"}}>
                <img style={{width: "75%", height: "500px", objectFit: "contain"}} src={image} alt=""/>
            </div>
            <div style={{width: "60%"}}>
                <h1>Product Details {title}</h1>
                <h2>{price}</h2>
                <p>{description}</p>
                <div style={{ fontSize: "30px", display: "flex", alignItems: "center" }}>
                    <CiCirclePlus onClick={increment} />
                    <span style={{ padding: "0 15px"}} contentEditable onInput={handleInputChange}>{count}</span>
                    <CiCircleMinus onClick={decrement}/>
                </div>
                <div style={{ margin: "50px 0"}}>
                    <button onClick={addBasket} className="button">Sepete Ekle</button>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;