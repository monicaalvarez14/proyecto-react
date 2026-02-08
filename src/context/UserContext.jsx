import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);

    const login = async (email, password) => {
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        setToken(data.token);
        setEmail(data.email);
    };

    const register = async (email, password) => {
        const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        setToken(data.token);
        setEmail(data.email);
    };

    const logout = () => {
        setToken(null);
        setEmail(null);
    }; return (
        <UserContext.Provider
            value={{ token, email, login, register, logout }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;