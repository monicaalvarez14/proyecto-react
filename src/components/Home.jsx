import { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas")
            .then((res) => res.json())
            .then((data) => setPizzas(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <Header />

            <div className="container my-4">
                <div className="row">
                    {pizzas.map((pizza) => (
                        <div className="col-md-4" key={pizza.id}>
                            <CardPizza pizza={pizza} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;


