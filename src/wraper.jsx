import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import "./index.css";
import { LanguageProvider } from "./global/languageProvider.jsx";
import ShowedModal from "./components/showed-modal.jsx";
import { Authprovider } from "./global/authProvider.jsx";
import { ModalProvider } from "./global/modalProvider.jsx";
export default function Wraper() {
  return (
    <Authprovider>
      <ModalProvider>
        <LanguageProvider>
          <Header  />
          <Outlet />
          <ShowedModal />
          <Footer />
        </LanguageProvider>
      </ModalProvider>
    </Authprovider>
  );
}
