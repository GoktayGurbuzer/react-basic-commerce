import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts} from "../redux/silces/productSlice.jsx";
import Product from "./Product.jsx";

function ProductList() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])
    return (
        <div className="flex-row" style={{ flexWrap: 'wrap', gap: '30px' }}>
            {
                products && products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    );
}

export default ProductList;