import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import "./index.css";
import { LanguageProvider } from "./global/languageProvider.jsx";
import ShowedModal from "./components/showed-modal.jsx";
import { Authprovider } from "./global/authProvider.jsx";
import { ModalProvider } from "./global/modalProvider.jsx";
import { LoaderContextProvider } from "./global/loaderProvider.jsx";
export default function Wraper() {
  return (
    <LoaderContextProvider>
      <ModalProvider>
        <Authprovider>
          <LanguageProvider>
            <Header />
            <Outlet />
            <ShowedModal />
            <Footer />
          </LanguageProvider>
        </Authprovider>
      </ModalProvider>
    </LoaderContextProvider>
  );
}
