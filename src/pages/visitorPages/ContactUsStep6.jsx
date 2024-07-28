import React from "react";
import { useNavigate } from "react-router-dom";

import { cnkavLogo } from "../../images";

const ContactUsStep6 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/contact-step7");
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
              Hardest part of using such an product ?
            </label>
            <input
              type="text"
              id="location"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg"
              placeholder="Enter Text"
            />
          </div>
          <div>
            <label
              htmlFor="religion"
              className="block text-sm font-medium mb-2"
            >
             Last time you encountered the issue regarding mentioned products in the survey?
            </label>
            <input
              type="text"
              id="religion"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg"
              placeholder="Enter Text"
            />
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

export default ContactUsStep6;
