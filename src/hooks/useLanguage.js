import { useContext } from "react";
import LanguageContext from "../global/languageProvider";
export default function useLanguage() {
  return useContext(LanguageContext);
}
