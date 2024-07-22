import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Notifications from "./pages/userPages/Notifications";
import Addresses from "./pages/userPages/Addresses";
import Subscriptions from "./pages/userPages/Subscriptions";
import Chats from "./pages/userPages/Chats";
import QuestsDashboard from "./pages/userPages/QuestsDashboard";
import DeployQuests from "./pages/userPages/DeployQuests";
import AccountDetails from "./components/userComponents/AccountDetails";
import Orders from "./components/userComponents/Orders";

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
          <Route path="profile" element={<Profile />}></Route>
          <Route path="profile/account-details" element={<AccountDetails />} />
          <Route path="profile/orders" element={<Orders />} />
          <Route path="profile/notifications" element={<Notifications />} />
          <Route path="profile/addresses" element={<Addresses />} />
          <Route path="profile/subscriptions" element={<Subscriptions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
