import React from "react";
import { useNavigate } from "react-router-dom";

import { cnkavLogo } from "../../images";

const ContactUsStep5 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/contact-step6");
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
              htmlFor="investmentAmount"
              className="block text-sm font-medium mb-2"
            >
             How much capital do you have to invest ?

            </label>
            <select
              id="investmentAmount"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg"
            >
              <option value="" disabled selected>
                Select an amount
              </option>
              <option value="0-50">0-50</option>
              <option value="50-250">50-250</option>
              <option value="250-2k">250-2k</option>
              <option value="2k-8k">2k-8k</option>
              <option value="8k-15k">8k-15k</option>
              <option value="15k-30k">15k-30k</option>
              <option value="30k-100k">30k-100k</option>
              <option value="100k-150k">100k-150k</option>
              <option value="150k+">150k+</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium mb-2"
            >
              Any similar product you are using ?
            </label>
            <input
              type="text"
              id="location"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg"
              placeholder="Enter text"
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

export default ContactUsStep5;
