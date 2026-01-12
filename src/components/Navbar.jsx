import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
    // Total en dinero del carrito
    const total = cart.reduce(
        (sum, pizza) => sum + pizza.price * pizza.count,
        0
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <Link className="navbar-brand" to="/">
                🍕 Pizzería Mamma Mía
            </Link>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                </ul>

                <Link
                    to="/cart"
                    className="btn btn-outline-light"
                >
                    🛒 Total: ${total.toLocaleString()}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;



