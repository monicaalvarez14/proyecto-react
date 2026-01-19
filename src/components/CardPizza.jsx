const CardPizza = ({ pizza, addToCart }) => {
    return (
        <div className="card shadow-sm h-100">
            <img src={pizza.img} className="card-img-top" alt={pizza.name} />

            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-capitalize">{pizza.name}</h5>

                <p className="fw-bold">
                    Precio: ${pizza.price.toLocaleString()}
                </p>

                <ul>
                    {pizza.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                    ))}
                </ul>

                <div className="mt-auto d-flex justify-content-between">
                    <button className="btn btn-outline-primary">
                        Ver más 👀
                    </button>
                    <button
                        className="btn btn-success"
                        onClick={() => addToCart(pizza)}
                    >
                        Añadir 🛒
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;
