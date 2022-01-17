import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState("");
    
    const handleToken = (token) => {
        setToken(token)
    }

    // console.log(token, "from context api")
    return(
        <AuthContext.Provider value={{token, setToken, handleToken}}>{children}</AuthContext.Provider>
    )
}