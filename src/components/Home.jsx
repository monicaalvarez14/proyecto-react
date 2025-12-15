import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";

const Home = ({ addToCart }) => {
    return (
        <>
            <Header />

            <div className="container my-4">
                <div className="row">
                    {pizzas.map((pizza) => (
                        <div className="col-md-4" key={pizza.id}>
                            <CardPizza
                                pizza={pizza}
                                addToCart={addToCart}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;


