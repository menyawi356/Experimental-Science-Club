import { createContext, useState } from "react";
const AuthContext = createContext();
export function Authprovider({ children }) {
  const [auth, setAuth] = useState({
    isAuth: false,
    user: null,
  });
  return (
    <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
