import { createContext, useState, useEffect } from "react";
const AuthContext = createContext();
export default AuthContext;
import useLoader from "../hooks/useLoader.js";
import authMe from "../API/authMe.js";
import useChangeModal from "../hooks/useChangeModal.js";
export function Authprovider({ children }) {
  const [auth, setAuth] = useState({
    isAuth: false,
    isResponded: false,
    user: null,
  });
  const { setShowedModal } = useChangeModal();
  const { startLoader, stopLoader } = useLoader();
  useEffect(() => {
    startLoader();
    authMe()
      .then((response) => {
        if (response.ok) {
          setAuth({
            isAuth: true,
            isResponded: true,
            user: { ...response.data },
          });
        } else {
          setAuth({
            isAuth: false,
            isResponded: false,
            user: null,
          });
        }
      })
      .catch(() => {
        setShowedModal({
          modal: "error",
          data: {
            errorCode: "NETWORK_ERROR",
            to: "none",
          },
        });
      })
      .finally(() => {
        stopLoader();
      });
  }, []);
  return (
    <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
