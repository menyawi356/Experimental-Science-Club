import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import "./index.css";
import ShowedModal from "./components/showed-modal.jsx";
export default function Wraper() {
  return (
    <>
      <Header />
      <Outlet />
      <ShowedModal />
      <Footer />
    </>
  );
}
