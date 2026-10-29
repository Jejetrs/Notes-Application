import React, { createContext, useState, useEffect } from "react";
import { getUserLogged } from "../utils/network-data";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        const { error, data } = await getUserLogged();
        if (!error) {
          setAuthUser({ token, ...data });
        } else {
          // Token tidak valid, hapus
          localStorage.removeItem("accessToken");
          setAuthUser(null);
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const login = async (token) => {
    localStorage.setItem("accessToken", token);
    const { error, data } = await getUserLogged();
    if (!error) {
      setAuthUser({ token, ...data });
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}