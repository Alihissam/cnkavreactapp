import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { cnkavLogo } from "../../images";

const ContactUsStep2 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/contact-step3");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div>
        <img src={cnkavLogo} alt="cnkav logo" className="h-40 mt-32 mb-10" />
      </div>
      <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="gender" className="block text-sm font-medium mb-2">
              What is your gender?
            </label>
            <select
              id="gender"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg"
            >
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-binary</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="maritalStatus"
              className="block text-sm font-medium mb-2"
            >
              Marital Status
            </label>
            <select
              id="maritalStatus"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg"
            >
              <option value="" disabled selected>
                Select Marital Status
              </option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
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
        <p className="mt-6 text-center text-sm text-white">
          By signing up, you agree to Cnkav <br />
          <a href="#" className="text-white underline">
            Terms and Conditions
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ContactUsStep2;
