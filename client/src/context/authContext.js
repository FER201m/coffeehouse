import { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ROUTER from "~/api/server";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("coffee_user") || null)
  );

  // Side Effects

  useEffect(() => {
    localStorage.setItem("coffee_user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    !currentUser && navigate("/");
  }, [currentUser, navigate]);

  // console.log(currentUser);

  // Functions
  const login = async (inputs) => {
    try {
      const res = await axios.post(ROUTER + "/api/auth/login", inputs);

      setCurrentUser(res.data);
      if (res.data.role?.title === "bartender") {
        navigate("/bartender");
      } else if (res.data.role?.title === "cashier") {
        navigate("/");
      }

      // if (["admin", "consultant", "cashier"].includes(res.data.role))
      //   navigate("/staff");
    } catch (error) {
      toast.error(error?.response?.data);
      // if(error?.response?.data) {
      // setIsLoading(false);
      // }
    }
  };

  const logout = async () => {
    try {
      setCurrentUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
