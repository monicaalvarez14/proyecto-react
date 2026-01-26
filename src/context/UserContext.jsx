import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true); // simulado

    const logout = () => setToken(false);

    return (
        <UserContext.Provider value={{ token, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;