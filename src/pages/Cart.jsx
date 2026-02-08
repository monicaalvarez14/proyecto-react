import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
    const { cart, increase, decrease, total } = useContext(CartContext);
    const { token } = useContext(UserContext);

    const [success, setSuccess] = useState(false);

    const checkout = async () => {
        try {
            await fetch("http://localhost:5000/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ cart }),
            });

            setSuccess(true);
        } catch (error) {
            console.error("Error en checkout:", error);
        }
    };

    return (
        <div className="container mt-4" style={{ maxWidth: "600px" }}>
            <h2>🛒 Carrito</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    {cart.map((pizza) => (
                        <div
                            key={pizza.id}
                            className="d-flex align-items-center mb-3"
                        >
                            <img
                                src={pizza.img}
                                width="60"
                                alt={pizza.name}
                            />

                            <div className="ms-3 flex-grow-1">
                                <h6 className="text-capitalize">
                                    {pizza.name}
                                </h6>
                                <p>${pizza.price.toLocaleString()}</p>
                            </div>
                            <button
                                className="btn btn-danger me-2"
                                onClick={() => decrease(pizza.id)}
                            >
                                −
                            </button>

                            <span>{pizza.count}</span>

                            <button
                                className="btn btn-success ms-2"
                                onClick={() => increase(pizza.id)}
                            >
                                +
                            </button>
                        </div>
                    ))}

                    <hr />
                    <h4>Total: ${total.toLocaleString()}</h4>

                    <button
                        className="btn btn-dark w-100 mt-3"
                        onClick={checkout}
                        disabled={!token}
                    >
                        Pagar 💳
                    </button>
                    {success && (
                        <p className="text-success text-center mt-3">
                            Compra realizada con éxito 🍕
                        </p>
                    )}
                </>
            )}
        </div>
    );
};

export default Cart;