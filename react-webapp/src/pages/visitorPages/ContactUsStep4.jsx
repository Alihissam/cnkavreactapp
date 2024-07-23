import React from "react";
import { useNavigate } from "react-router-dom";

import { cnkavLogo } from "../../images";

const ContactUsStep4 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/contact-step5");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div>
        <img src={cnkavLogo} alt="cnkav logo" className="h-40 mt-32 mb-10" />
      </div>
      <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium mb-2"
            >
              Where are you from?
            </label>
            <select
              id="location"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg"
            >
              <option value="" disabled selected>
                Select your location
              </option>
              <option value="north_america">North America</option>
              <option value="south_america">South America</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
              <option value="africa">Africa</option>
              <option value="australia">Australia</option>
              <option value="antarctica">Antarctica</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="religion"
              className="block text-sm font-medium mb-2"
            >
              What is your religion?
            </label>
            <select
              id="religion"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg"
            >
              <option value="" disabled selected>
                Select your religion
              </option>
              <option value="christianity">Christianity</option>
              <option value="islam">Islam</option>
              <option value="hinduism">Hinduism</option>
              <option value="buddhism">Buddhism</option>
              <option value="judaism">Judaism</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
          <div className="pt-6">
            <button
              type="submit"
              className="rounded-3xl w-full bg-black text-white py-3 px-4 font-bold"
              style={{
                border: "2px solid transparent",
                borderImage: "linear-gradient(120deg, red, yellow)",
                borderImageSlice: 1,
              }}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsStep4;
