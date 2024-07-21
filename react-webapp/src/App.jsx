import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import LogInPage from "./pages/LogInPage";
import QuestsLandingPage from "./pages/QuestsLandingPage";
import DashbaordLayout from "./pages/DashboardLayout";
import Community from "./pages/Community";
import AffiliatedTools from "./pages/AffiliatedTools";
import QuestsDashboard from "./pages/QuestsDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="login" element={<LogInPage />} />
        </Route>
        <Route path="/dashboard" element={<DashbaordLayout />}>
          <Route index element={<QuestsLandingPage />} />
          <Route path="community" element={<Community />} />
          <Route path="affiliatedtools" element={<AffiliatedTools />} />
          <Route path="questsdashboard" element={<QuestsDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
