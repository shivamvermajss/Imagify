import { createContext, useState } from "react";


export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [user,setuser] = useState(null);
    const [showLogin,setShowLogin] = useState(false);
    const [token,setToken] = useState(localStorage.getItem("token") );
    const [credit ,setCredit] = useState(false);



    const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';



    const value = {
        user,
        setuser,
        showLogin,
        setShowLogin,
        backendURL,
        token,
        setToken,
        credit,
        setCredit
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}      
export default AppContextProvider;     