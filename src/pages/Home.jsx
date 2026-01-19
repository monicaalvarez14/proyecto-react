import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header.jsx";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas")
            .then((res) => res.json())
            .then((data) => setPizzas(data));
    }, []);

    return (
        <>
            <Header />
            <div className="container my-4">
                <div className="row">
                    {pizzas.map((pizza) => (
                        <div className="col-md-4" key={pizza.id}>
                            <CardPizza pizza={pizza} addToCart={addToCart} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;


