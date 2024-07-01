import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {
  loginQuery,
  logoutQuery,
  registerQuery,
  profileQuery,
} from "../api/auth";

const profileQueryRoute = async () => {
  try {
    const res = await axios.post("auth/profile", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};

const logoutQueryRoute = async () => {
  try {
    const res = await axios.post("auth/logout", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkLogin() {
      const token = Cookies.get("token");

      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUserData(null);
      }

      try {
        const profileData = await profileQueryRoute();
        setIsAuthenticated(true);
        setUserData(profileData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setLoading(false);
        setIsAuthenticated(false);
        setUserData(null);
      }
    }

    checkLogin();
  }, []);

  const login = async (username, password) => {
    try {
      const res = await loginQuery(username, password);

      setUserData(res.data);
      setIsAuthenticated(true);

      return res;
    } catch (error) {
      console.error("Error logging in:", error);
      setIsAuthenticated(false);
      setUserData(null);
      throw error;
    }
  };

  const register = async (username, password) => {
    try {
      const res = await registerQuery(username, password);

      setUserData(res.data);
      setIsAuthenticated(true);

      return res;
    } catch (error) {
      console.error("Error registering:", error);
      setIsAuthenticated(false);
      setUserData(null);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutQueryRoute();
      const pastDate = new Date(0); // Crear una fecha pasada (epoch time)
      document.cookie = `token=; expires=${pastDate.toUTCString()}; path=/;`; // Elimina la cookie "token"
      Cookies.set("token", "");
      setIsAuthenticated(false);
      setUserData(null);
    } catch (error) {
      console.error("Error logging out:", error);
      setIsAuthenticated(false);
      setUserData(null);
      throw error;
    }
  };
  const profile = async () => {
    const data = await profileQuery();
    return data;
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        isAuthenticated,
        loading,
        login,
        register,
        logout,
        profile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
