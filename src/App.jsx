import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Wraper from "./wraper";
import Homepage from "./pages/hompage";
import About from "./pages/aboutUs";
import Competitions from "./pages/competitions";
import Publishing from "./pages/publishing";
import Chat from "./pages/Chat";
import Partners from "./pages/partners";
import Contact from "./pages/contactUs";
import SubmitWork from "./components/publish-page-componnets/sumbit-work";
import ExplorePublished from "./components/publish-page-componnets/explore-published";
import AdminDashboard from "./pages/adminDashboard";
import AdminRoute from "./components/adminRoute";
import Statistics from "./components/admin/statistics";
import ExplorePublishedForAdmins from "./components/admin/explorePabers.Admin";
import ReceivedContacts from "./components/admin/ReceivedContacts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wraper />}>
          <Route index element={<Navigate to="Home" replace />} />
          <Route path="Home" element={<Homepage />} />
          <Route path="About-Us" element={<About />} />
          <Route path="Competitions" element={<Competitions />} />
          <Route path="Publishing" element={<Publishing />}>
            <Route index element={<Navigate to="submit-work" replace />} />
            <Route path="submit-work" element={<SubmitWork />} />
            <Route path="explore-published" element={<ExplorePublished />} />
          </Route>
          <Route path="Chat-Hub" element={<Chat />} />
          <Route path="Partners" element={<Partners />} />
          <Route path="Contact-Us" element={<Contact />} />
          <Route
            path="Admin-dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          >
            <Route index element={<Navigate to={"statistics"} replace />} />
            <Route path="statistics" element={<Statistics />} />
            <Route
              path="review-published-papers"
              element={<ExplorePublishedForAdmins />}
            />
            {/* <Route path="received-contacts" element={<ReceivedContacts />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
