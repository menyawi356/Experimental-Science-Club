import { useEffect } from "react";
import useAuth from "../hooks/useAuth.js";
import useChangeModal from "../hooks/useChangeModal.js";
import { useNavigate } from "react-router-dom";
export default function AdminRoute({ children }) {
  const { auth } = useAuth();
  const { user, isAuth, isResponded } = auth;
  const { setShowedModal } = useChangeModal();
  console.log(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isResponded) return;
    if (isAuth && user?.role === "admin") return;
    setShowedModal({
      modal: "error",
      data: {
        errorCode: "UNAUTHORIZED",
        to: "none",
      },
    });
    navigate("/Home");
  }, [isAuth, user, isResponded]);

  return <>{isResponded && isAuth && user?.role === "admin" && children}</>;
}
