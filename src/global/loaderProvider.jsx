import { createContext, useState } from "react";
import Loader from "../components/loader";
const loaderContext = createContext();
export default loaderContext;
export function LoaderContextProvider({ children }) {
  const [isLoading, setIsloading] = useState(false);
  return (
    <loaderContext.Provider value={{ setIsloading }}>
      {children}
      {isLoading && <Loader />}
    </loaderContext.Provider>
  );
}
