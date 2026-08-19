import { createContext, useState } from "react";
const modalProvider = createContext();
export default modalProvider;
export function ModalProvider({ children }) {
  const [showedModal, setShowedModal] = useState({ modal: "none", data: {} });
  return (
    <modalProvider.Provider value={{ setShowedModal, showedModal }}>
      {children}
    </modalProvider.Provider>
  );
}
