import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Authprovider } from "./global/authProvider.jsx";
import { ModalProvider } from "./global/modalProvider.jsx";
import { LoaderContextProvider } from "./global/loaderProvider.jsx";
import { LanguageProvider } from "./global/languageProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderContextProvider>
      <ModalProvider>
        <Authprovider>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </Authprovider>
      </ModalProvider>
    </LoaderContextProvider>
  </StrictMode>,
);
