import React from "react";
import { useNavigate } from "react-router-dom";

import { cnkavLogo } from "../../images";

const ContactUsStep3 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/contact-step4");
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
              htmlFor="employmentStatus"
              className="block text-sm font-medium mb-2"
            >
              Are you employed?
            </label>
            <select
              id="employmentStatus"
             
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="student">Select an option</option>
              <option value="student">Student</option>
              <option value="employed">Employed</option>
              <option value="not-employed">Not Employed</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="productInterest"
              className="block text-sm font-medium mb-2"
            >
              Have you ever tried or want to try any product?
            </label>
            <input
              type="text"
              id="productInterest"
         
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg"
              placeholder="Enter product interest"
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

export default ContactUsStep3;
