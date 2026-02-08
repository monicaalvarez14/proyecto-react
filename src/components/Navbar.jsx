import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    const { token, logout } = useContext(UserContext);
    const { total } = useContext(CartContext);

    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <Link className="navbar-brand" to="/">🍕 Mamma Mía</Link>

            <div className="d-flex gap-3 align-items-center">
                <Link className="btn btn-success" to="/cart">
                    🛒 Total: ${total.toLocaleString()}
                </Link>

                {token ? (
                    <>
                        <Link className="nav-link text-white" to="/profile">Profile</Link>
                        <button className="btn btn-outline-light" onClick={logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link className="nav-link text-white" to="/login">Login</Link>
                        <Link className="nav-link text-white" to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
