"use client";

import { createContext, useEffect, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  currentUser: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) || null : null,
};

// const INITIAL_STATE = {
//   currentUser: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) || null : null,
// };

// const INITIAL_STATE = {
//     currentUser: JSON.parse(localStorage.getItem("user")) || null,
// };

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // Sincronizar con localStorage para obtener el usuario en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
      }
    }
  }, []); // Esto solo se ejecuta una vez, al montar el componente

  // Guardar los cambios de usuario en localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(state.currentUser));
    }
  }, [state.currentUser]);

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(state.currentUser));
  // }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};