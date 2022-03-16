import React from "react";
import useProvideAuth from "../../hooks/useProvideAuth";

export const AuthContext = React.createContext({
  user: null,
  signIn: async () => {},
  signUp: async () => {},
  signingOut: async () => {},
  loading: true,
});

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
