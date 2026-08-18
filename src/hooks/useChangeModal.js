import { useContext } from "react";
import modalProvider from "../global/modalProvider";

export default function useChangeModal() {
  return useContext(modalProvider);
}
