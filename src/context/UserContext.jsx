import { createContext, useState, useMemo } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true)

    const logout = () => setToken(false);

    const globalState = useMemo (() => ({
        token, 
        logout
    }), [token])

    return (
        <UserContext.Provider value={globalState}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;