const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <div className="card shadow-sm m-3 h-100 d-flex flex-column" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt={name} />

            <div className="card-body">
                <h3 className="card-tittle">{name}</h3>
                <p className="card-text fw-bold">Precio: ${price.toLocaleString()}</p>

                <h5>Ingredientes:</h5>
                <ul>
                    {ingredients.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <div className="d-flex justify-content-between mt-auto">
                    <button className="btn btn-outline-primary">Ver más 👀</button>
                    <button className="btn btn-success" >Añadir 🛒</button>
                </div>

            </div>
        </div>
    );
};

export default CardPizza;

