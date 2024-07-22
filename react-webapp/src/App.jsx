import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import LogInPage from "./pages/LogInPage";
import QuestsLandingPage from "./pages/QuestsLandingPage";
import DashbaordLayout from "./pages/DashboardLayout";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import ExclusiveRoomSection from "./components/ExclusiveRoomSection";
import AffiliatedTools from "./pages/AffiliatedTools";
import AccountDetails from "./components/AccountDetails";
import Orders from "./components/Orders";
import Notifications from "./pages/Notifications";
import Addresses from "./pages/Addresses";
import Subscriptions from "./pages/Subscriptions";
import Chats from "./pages/Chats";
import QuestsDashboard from "./pages/QuestsDashboard";
import DeployQuest from "./pages/DeployQuest";

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
          <Route path="deployquests" element={<DeployQuest />} />
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
