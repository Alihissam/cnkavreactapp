import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const profilePaths = [
    { path: "/dashboard/account-details", label: "Account Details" },
    { path: "/dashboard/order-page", label: "Order" },
    { path: "/dashboard/notifications-page", label: "Notifications" },
    { path: "/dashboard/subscriptions", label: "Subscriptions" },
    { path: "/dashboard/address-page", label: "Addresses" },
    { path: "/dashboard/deploy-quests", label: "Upload Quest plugin" },
    { path: "/dashboard/quests-dashboard", label: "Quest Dashboard" },
    { path: "/dashboard/choose-pay", label: "Payment Method" },
    { path: "/dashboard/events", label: "My Events and Purchased Events" },
    { path: "/dashboard/wallet", label: "Wallet" },
    { path: "/dashboard/downloads-plugins", label: "Downloads and plugins" },
    { path: "/dashboard/profile", label: "General" },
    { path: "/dashboard/privacypolicy", label: "Privacy Policy" },
    { path: "/dashboard/termsofservices", label: "Terms Of Services" },
    { path: "/dashboard/about", label: "About Us" },
    { path: "/logout", label: "Log Out" },
  ];

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="pt-10 w-full z-10 shadow-md px-10">
      <div className="mt-60">
        {profilePaths.map((option) => (
          <div key={option.path}>
            <hr />
            {option.label === "Log Out" ? (
              <button
                onClick={handleLogout}
                className="block text-white py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold">{option.label}</h3>
              </button>
            ) : (
              <Link
                to={option.path}
                className={`block text-white py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${
                  option.label === "General" ? "bg-gray-800 pl-2" : ""
                }`}
              >
                <h3 className="text-xl font-semibold">{option.label}</h3>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
