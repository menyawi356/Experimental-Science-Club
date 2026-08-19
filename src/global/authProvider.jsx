import { createContext, useState, useEffect } from "react";
const AuthContext = createContext();
export default AuthContext;
import authMe from "../API/authMe.js";
export function Authprovider({ children }) {
  const [auth, setAuth] = useState({
    isAuth: false,
    user: null,
  });
  useEffect(() => {
    console.log(auth);
  }, [auth]);
  useEffect(() => {
    authMe().then((response) => {
      if (response.ok) {
        setAuth({
          isAuth: true,
          user: { ...response.data },
        });
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
