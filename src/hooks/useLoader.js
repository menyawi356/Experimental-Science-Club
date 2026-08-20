import { useContext } from "react";
import loaderContext from "../global/loaderProvider";

export default function useLoader() {
  const { setIsloading } = useContext(loaderContext);
  const startLoader = () => {
    setIsloading(true);
  };
  const stopLoader = () => {
    setIsloading(false);
  };
  return { startLoader, stopLoader };
}
