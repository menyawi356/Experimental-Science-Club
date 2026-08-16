import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Wraper from "./wraper";
import Homepage from "./pages/hompage";
import About from "./pages/aboutUs";
import Competitions from "./pages/competitions";
import Publishing from "./pages/publishing";
import Chat from "./pages/Chat";
import Partners from "./pages/partners";
import Contact from "./pages/contactUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wraper />}>
          <Route index element={<Navigate to="Home" replace />} />
          <Route path="Home" element={<Homepage />} />
          <Route path="About-Us" element={<About />} />
          <Route path="Competitions" element={<Competitions />} />
          <Route path="Publishing" element={<Publishing />} />
          <Route path="Chat-Hub" element={<Chat />} />
          <Route path="Partners" element={<Partners />} />
          <Route path="Contact-Us" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
