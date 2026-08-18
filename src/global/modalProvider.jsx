import { createContext, useState} from "react";
const modalProvider = createContext();
export default modalProvider;
export function ModalProvider({ children }) {
  const [showedModal, setShowedModal] = useState("none");
  return (
    <modalProvider.Provider value={{ setShowedModal, showedModal }}>
      {children}
    </modalProvider.Provider>
  );
}
