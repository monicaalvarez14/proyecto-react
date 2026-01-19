import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { total } = useContext(CartContext);

    return (
        <nav className="navbar navbar-dark bg-dark px-4">
            <Link to="/" className="navbar-brand">
                🍕 Mamma Mía
            </Link>

            <Link to="/cart" className="btn btn-outline-light">
                🛒 Total: ${total.toLocaleString()}
            </Link>
        </nav>
    );
};

export default Navbar;



