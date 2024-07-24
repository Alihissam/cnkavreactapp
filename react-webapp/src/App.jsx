import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Layout from "./pages/visitorPages/Layout";
import Home from "./pages/visitorPages/Home";
import ContactUsStep1 from "./pages/visitorPages/ContactUsStep1";
import ContactUsStep2 from "./pages/visitorPages/ContactUsStep2";
import ContactUsStep3 from "./pages/visitorPages/ContactUsStep3";
import ContactUsStep4 from "./pages/visitorPages/ContactUsStep4";
import ContactUsStep5 from "./pages/visitorPages/ContactUsStep5";
import ContactUsStep6 from "./pages/visitorPages/ContactUsStep6";
import ContactUsStep7 from "./pages/visitorPages/ContactUsStep7";
import ContactUsStep8 from "./pages/visitorPages/ContactUsStep8";
import LogInPage from "./pages/visitorPages/LogInPage";
import ExclusiveRoomSection from "./components/visitorComponents/ExclusiveRoomSection";
import QuestsLandingPage from "./pages/userPages/QuestsLandingPage";
import DashbaordLayout from "./pages/userPages/DashboardLayout";
import Community from "./pages/userPages/Community";
import Profile from "./pages/userPages/Profile";
import AffiliatedTools from "./pages/userPages/AffiliatedTools";
import CommunityChats from "./pages/userPages/CommunityChats";
import ExclusiveRoomChat from "./pages/userPages/ExclusiveRoomChat";
import QuestsCommunity from "./pages/userPages/QuestsCommunity";
import QuestsDashboard from "./pages/userPages/QuestsDashboard";
import DeployQuests from "./pages/userPages/DeployQuests";
import AboutUs from "./pages/userProfileDashboard/AboutUs";
import TermsofServices from "./pages/userProfileDashboard/TermsOfServices";
import PrivacyPolicy from "./pages/userProfileDashboard/PrivacyPolicy";
import DownloadsPlugins from "./pages/userProfileDashboard/DownloadsAndPlugins";
import Wallet from "./pages/userProfileDashboard/Wallet";
import MyEventsPurchasedEvents from "./pages/userProfileDashboard/MyEventsPurchasedEvents";
import PaymentMethod from "./pages/userProfileDashboard/PaymentMethod";
import AccountDetails from "./pages/userProfileDashboard/AccountDetails";
import OrderPage from "./pages/userProfileDashboard/OrderPage";
import NotificationsPage from "./pages/userProfileDashboard/NotificationsPage";
import AddressPage from "./pages/userProfileDashboard/AddressPage";
import SubscriptionsPage from "./pages/userProfileDashboard/SubscriptionsPage";
import ContactUs from "./pages/userProfileDashboard/ContactUs";

import AffiliateProductRequestPage from "./pages/visitorPages/AffiliateProductRequestPage ";
import RequestAffilateProduct from "./pages/userPages/RequestAffilateProduct";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact-step1" element={<ContactUsStep1 />} />
          <Route path="contact-step2" element={<ContactUsStep2 />} />
          <Route path="contact-step3" element={<ContactUsStep3 />} />
          <Route path="contact-step4" element={<ContactUsStep4 />} />
          <Route path="contact-step5" element={<ContactUsStep5 />} />
          <Route path="contact-step6" element={<ContactUsStep6 />} />
          <Route path="contact-step7" element={<ContactUsStep7 />} />
          <Route path="contact-step8" element={<ContactUsStep8 />} />
          <Route path="contact" element={<ContactUsStep1 />} />
        
          <Route path="login" element={<LogInPage />} />
          <Route path="register" element={<LogInPage />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-services" element={<TermsofServices />} />
          <Route path="exclusive" element={<ExclusiveRoomSection />} />
          <Route path="subscriptions" element={<SubscriptionsPage />} />
          <Route
            path="exclusive/subscriptions"
            element={<SubscriptionsPage />}
          />
        </Route>
        <Route path="/dashboard" element={<DashbaordLayout />}>
          <Route index element={<QuestsLandingPage />} />
          <Route path="community" element={<Community />} />
          <Route path="community-chat" element={<CommunityChats />} />
          <Route path="exclusive-room-chat" element={<ExclusiveRoomChat />} />
          <Route path="quests-community" element={<QuestsCommunity />} />
          <Route path="affiliatetools" element={<AffiliatedTools />} />
          <Route
            path="request-affiliation"
            element={<RequestAffilateProduct />}
          />
          <Route path="quests-dashboard" element={<QuestsDashboard />} />
          <Route path="deploy-quests" element={<DeployQuests />} />
          <Route path="subscriptions-page" element={<SubscriptionsPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="account-details" element={<AccountDetails />} />
          <Route path="order-page" element={<OrderPage />} />
          <Route path="notifications-page" element={<NotificationsPage />} />
          <Route path="address-page" element={<AddressPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="termsofservices" element={<TermsofServices />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="downloads-plugins" element={<DownloadsPlugins />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="events" element={<MyEventsPurchasedEvents />} />
          <Route path="payment-method" element={<PaymentMethod />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
        <Route path="/logout" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
