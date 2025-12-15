import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { pizzaCart } from "./pizzas";

function App() {
  // 🛒 Estado GLOBAL del carrito
  const [cart, setCart] = useState(pizzaCart);

  // ➕ Agregar pizza al carrito
  const addToCart = (pizza) => {
    const exists = cart.find((p) => p.id === pizza.id);

    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === pizza.id
            ? { ...p, count: p.count + 1 }
            : p
        )
      );
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Home addToCart={addToCart} />
      </div>
      {/* Mostrar Login */}
      {/*<Login /> */}

      {/* Y si quieres probar registro: */}
      {/* <RegisterPage /> */}
      <Cart cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;

