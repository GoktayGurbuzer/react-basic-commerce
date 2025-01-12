import '../css/Header.css'
import { CiShoppingBasket, CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Badge} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setDrawer} from "../redux/silces/basketSlice.jsx";

function Header() {
    const [theme, setTheme] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {products} = useSelector((store) => store.basket);
    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);

        if(theme) {
            root.style.backgroundColor = "black";
            root.style.color = "white";
        } else {
            root.style.backgroundColor = "white";
            root.style.color = "black";
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: '2rem' }}>
            <div className="flex-row" onClick={() => navigate("/")}>
                <img className="logo" src="/src/images/logo.png" alt="Logo"/>
            </div>

            <div className="flex-row">
            <input className="search-input" type="text" placeholder="Hangi ürün?"/>
                <div>
                    {
                        theme ? <FaMoon className="icon" onClick={changeTheme} /> : <CiLight className="icon" onClick={changeTheme} />
                    }
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <CiShoppingBasket style={{ marginRight: '6px' }} className="icon" />
                    </Badge>
                </div>
            </div>
        </div>
    );
}

export default Header;