import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import "./index.css";
import { LanguageProvider } from "./global/languageProvider.jsx";
import ShowedModal from "./components/showed-modal.jsx";
import { useState } from "react";
import { Authprovider } from "./global/authProviser.jsx";
export default function Wraper() {
  const [showedModal, setShowedModal] = useState("none");
  return (
    <Authprovider>
      <LanguageProvider>
        <Header setShowedModal={setShowedModal} />
        <Outlet />
        <ShowedModal
          showedModal={showedModal}
          setShowedModal={setShowedModal}
        />
        <Footer />
      </LanguageProvider>
    </Authprovider>
  );
}
