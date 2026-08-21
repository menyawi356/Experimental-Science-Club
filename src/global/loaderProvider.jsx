import { createContext, useState } from "react";
import Loader from "../components/loader";
import { AnimatePresence } from "framer-motion";
const loaderContext = createContext();
export default loaderContext;
export function LoaderContextProvider({ children }) {
  const [isLoading, setIsloading] = useState(false);
  return (
    <loaderContext.Provider value={{ setIsloading }}>
      {children}
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
    </loaderContext.Provider>
  );
}
