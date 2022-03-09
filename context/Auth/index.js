import React from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
