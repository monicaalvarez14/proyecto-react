import { useEffect, useState } from "react";

const Pizza = () => {
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas/p001")
            .then((res) => res.json())
            .then((data) => setPizza(data))
            .catch((error) => console.error(error));
    }, []);

    if (!pizza) return <p className="text-center">Cargando...</p>;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={pizza.img}
                        alt={pizza.name}
                        className="img-fluid rounded"
                    />
                </div>

                <div className="col-md-6">
                    <h2>{pizza.name}</h2>
                    <p>{pizza.desc}</p>

                    <h5>Ingredientes:</h5>
                    <ul>
                        {pizza.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                        ))}
                    </ul>

                    <h4 className="mt-3">
                        Precio: ${pizza.price.toLocaleString()}
                    </h4>

                    <button className="btn btn-success mt-3">
                        Añadir al carrito 🛒
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pizza;