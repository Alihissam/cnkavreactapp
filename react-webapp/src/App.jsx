import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./pages/visitorPages/Layout";
import Home from "./pages/visitorPages/Home";
import ContactUs from "./pages/visitorPages/ContactUs";
import LogInPage from "./pages/visitorPages/LogInPage";
import ExclusiveRoomSection from "./components/visitorComponents/ExclusiveRoomSection";
import QuestsLandingPage from "./pages/userPages/QuestsLandingPage";
import DashbaordLayout from "./pages/userPages/DashboardLayout";
import Community from "./pages/userPages/Community";
import Profile from "./pages/userPages/Profile";
import AffiliatedTools from "./pages/userPages/AffiliatedTools";
import Chats from "./pages/userPages/Chats";
import QuestsDashboard from "./pages/userPages/QuestsDashboard";
import DeployQuests from "./pages/userPages/DeployQuests";
import AboutUs from "./pages/userProfileDashboard/AboutUs";
import TermsofServices from "./pages/userProfileDashboard/TermsofServices";
import PrivacyPolicy from "./pages/userProfileDashboard/PrivacyPolicy";
import DownloadsPlugins from "./pages/userProfileDashboard/DownloadsAndPlugins";
import Wallet from "./pages/userProfileDashboard/Wallet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="exclusive" element={<ExclusiveRoomSection />} />
        </Route>
        <Route path="/dashboard" element={<DashbaordLayout />}>
          <Route index element={<QuestsLandingPage />} />
          <Route path="community" element={<Community />} />
          <Route path="chats" element={<Chats />} />
          <Route path="affiliatetools" element={<AffiliatedTools />} />
          <Route path="quests-dashboard" element={<QuestsDashboard />} />
          <Route path="deploy-quests" element={<DeployQuests />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="termsofservices" element={<TermsofServices />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="downloads-plugins" element={<DownloadsPlugins />} />
          <Route path="wallet" element={<Wallet />} />
        </Route>
        <Route path="/logout" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
