import {configureStore} from '@reduxjs/toolkit';
import appReducer from "../redux/silces/appSlice";
import productReducer from "../redux/silces/productSlice";
import basketReducer from "../redux/silces/basketSlice.jsx";

export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer
    },
})