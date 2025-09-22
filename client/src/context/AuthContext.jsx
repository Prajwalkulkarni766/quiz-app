import React from "react";
import { createContext, useState, useContext } from "react";

const AuthConext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const login = (role = "student") => {
    setUser(role);
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <AuthConext.Provider value={{ user, login, logout }}>
      {children}
    </AuthConext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthConext);
}