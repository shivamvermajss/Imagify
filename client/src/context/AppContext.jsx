import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null); 
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [credit, setCredit] = useState(false);

    const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

    const navigate = useNavigate();


    const loadCreditsData = async () => {
        try {

            const { data } = await axios.post(backendURL + '/api/user/credits', {}, { headers: { token } });
        
            if (data.success) { 
            setCredit(data.credits);
            setUser(data.user);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || error.message);
        }
    };

    const generateImage = async (prompt) => {
        try {
            const { data } = await axios.post(
            backendURL + '/api/image/generate-image',
            { prompt },
            { headers: { token } }
            );

        if (data.success) {
        loadCreditsData();
        return data.image;
        }

        } catch (error) {

            if (error.response?.status === 403) {
            toast.error("No credits left. Please buy more credits.");
            navigate('/buy-credit'); 
            return;
    }

        toast.error(error.response?.data?.message || error.message);
    }
    };
      
    
    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setUser(null);
    }    

    useEffect(() => {
        if(token){
            loadCreditsData();
        }
    }, [token])    

    const value = {
        user,
        setUser, 
        showLogin,
        setShowLogin,
        backendURL,
        token,
        setToken,
        credit,
        setCredit,
        loadCreditsData,
        logout,
        generateImage
    }
    
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}      
export default AppContextProvider;