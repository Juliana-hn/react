import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = (information) => {
        if (information.email === 'test@test.com' && information.password === '123456') {
            const userData = {
                name: 'Test',
                email: 'test@test.com',
                id: 1
            };
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData)); // Guardar en localStorage
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;