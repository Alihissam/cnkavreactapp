import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const profileOptions = [
    { path: "account-details", label: "Account Details" },
    { path: "orders", label: "Orders" },
    { path: "notifications", label: "Notifications" },
    { path: "addresses", label: "Addresses" },
    { path: "uploadquest-plugin", label: "Uploadquest Plugin" },
    { path: "quest-dashboard", label: "Quest Dashboard" },
    { path: "payment-methods", label: "Payment Methods" },
    { path: "my-events", label: "My Events and Purchased Events" },
    { path: "wallet", label: "Wallet" },
    { path: "download-plugins", label: "Download and Plugins" },
    { path: "general", label: "General" },
    { path: "privacy-policy", label: "Privacy Policy" },
    { path: "terms-of-service", label: "Terms of Service" },
    { path: "about-us", label: "About Us" },
    { path: "logout", label: "Log Out" },
  ];

  return (
    <div className="pt-10 w-full z-10 shadow-md px-10  ">
      <div className="mt-60">
        {profileOptions.map((option) => (
          <>
            <hr />
            <Link
              key={option.path}
              to={option.path}
              className="block w-3/4  text-white py-2  rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold ">{option.label}</h3>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Profile;
