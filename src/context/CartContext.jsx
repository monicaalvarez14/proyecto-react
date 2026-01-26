import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        const found = cart.find((item) => item.id === pizza.id);

        if (found) {
            setCart(
                cart.map((item) =>
                    item.id === pizza.id
                        ? { ...item, count: item.count + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...pizza, count: 1 }]);
        }
    };

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
        <CartContext.Provider
            value={{ cart, addToCart, increase, decrease, total }
            }
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;