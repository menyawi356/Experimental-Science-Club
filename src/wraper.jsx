import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import "./index.css"
export default function Wraper() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
