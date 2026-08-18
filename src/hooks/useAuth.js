import { useContext } from "react";
import AuthContext from "../global/authProviser";

export default function useAuth() {
  return useContext(AuthContext);
}
