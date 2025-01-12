import './App.css'
import PageContainer from "./container/PageContainer.jsx";
import Header from "./components/Header.jsx";
import RouterConfig from "./config/RouterConfig.jsx";
import Loading from "./components/Loading.jsx";
import {Drawer} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {calculateBasket, setDrawer, removeFromBasket} from "./redux/silces/basketSlice.jsx";
import {useEffect} from "react";

function App() {
    const { products, drawer, totalAmount } = useSelector((store) => store.basket);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateBasket());
    }, [])

  return (
    <>
      <div>
        <PageContainer>
            <Loading />
            <Drawer className="drawer" anchor="right" open={drawer} onClose={() => dispatch(setDrawer())}>
                <h1 style={{textAlign: "center"}}>Sepetim</h1>
                {
                    products && products.map((product) => {
                        return (
                            <>
                                <div className="flex-row"
                                     style={{padding: "10px", gap: "10px", justifyContent: "space-between"}}
                                     key={product.id}>
                                    <img src={product.image} width={50} height={50} style={{}} alt={product.title}/>
                                    <div>
                                        <p style={{width: "300px"}}>{product.title} - ({product.count})</p>

                                    </div>
                                    <p style={{
                                        float: "right",
                                        fontWeight: "bold"
                                    }}>{product.price} TL</p>
                                    <button style={{
                                        border: "none",
                                        backgroundColor: "red",
                                        color: "white",
                                        borderRadius: "5px"
                                    }}
                                    onClick={() => dispatch(removeFromBasket({ id: product.id }))}>X
                                    </button>
                                </div>

                            </>
                        )
                    })
                }
                <div className="flex-row">
                    {
                        products.length > 0 ? (
                            <h2 style={{textAlign: "center"}}>Sepet Toplamı <br/> {totalAmount}</h2>
                        ) : (
                            <h2 style={{textAlign: "center"}}>Sepetinizde Ürün Bulunmamaktadır.</h2>
                        )
                    }
                </div>
            </Drawer>
            <Header/>
            <RouterConfig/>
        </PageContainer>
      </div>
    </>
  )
}

export default App
