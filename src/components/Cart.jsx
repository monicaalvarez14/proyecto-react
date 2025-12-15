import { useState } from "react";

const Cart = ({ cart, setCart }) => {

    const increase = (id) => {
        setCart(
            cart.map((pizza) =>
                pizza.id === id
                    ? { ...pizza, count: pizza.count + 1 }
                    : pizza
            )
        );
    };

    const decrease = (id) => {
        setCart(
            cart
                .map((pizza) =>
                    pizza.id === id
                        ? { ...pizza, count: pizza.count - 1 }
                        : pizza
                )
                .filter((pizza) => pizza.count > 0)
        );
    };

    const total = cart.reduce(
        (sum, pizza) => sum + pizza.price * pizza.count,
        0
    );

    return (
        <div className="container mt-4" style={{ maxWidth: "600px" }}>
            <h2>🛒 Carrito</h2>

            {cart.map((pizza) => (
                <div key={pizza.id} className="d-flex align-items-center mb-3">
                    <img src={pizza.img} width="60" />

                    <div className="ms-3 flex-grow-1">
                        <h6 className="text-capitalize">{pizza.name}</h6>
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
                className="btn btn-success w-100 mt-3"
            >
                Pagar 💳
            </button>
        </div>
    );
};

export default Cart;