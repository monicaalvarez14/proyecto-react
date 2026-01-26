import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Pizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/pizzas/${id}`)
            .then((res) => res.json())
            .then((data) => setPizza(data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!pizza) return <p className="text-center mt-5">Cargando...</p>;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={pizza.img} className="img-fluid rounded" />
                </div>

                <div className="col-md-6">
                    <h2>{pizza.name}</h2>
                    <p>{pizza.desc}</p>

                    <h5>Ingredientes:</h5>
                    <ul>
                        {pizza.ingredients.map((i, index) => (
                            <li key={index}>🍕 {i}</li>
                        ))}
                    </ul>

                    <h4 className="mt-3">Precio: ${pizza.price.toLocaleString()}</h4>
                </div>
            </div>
        </div>
    );
};

export default Pizza;