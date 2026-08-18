import { useContext } from "react";
import AuthContext from "../global/authProvider";

export default function useAuth() {
  return useContext(AuthContext);
}
