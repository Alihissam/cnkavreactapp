import React from "react";
import { waveInflue, waveCnkav, waveER } from "../images";

const AffiliatedTools = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2  bg-black ">
      <div className="flex flex-col justify-center items-center mt-32">
        <form className="space-y-4 py-5 w-3/4">
          <div>
            <input
              type="text"
              id="questName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Select Options"
            />
          </div>

          <div>
            <input
              type="text"
              id="questName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Select Products"
            />
          </div>
          <div>
            <input
              type="text"
              id="questName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Request New Affiliate Product"
            />
          </div>
          <div>
            <input
              type="text"
              id="questName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Select Affiliate marketing links"
            />
          </div>
          <div>
            <input
              type="text"
              id="questName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Affiliate marketing links Option (Edit/Delete)"
            />
          </div>
        </form>

        <img src={waveInflue} alt="" className="w-3/5 py-5" />
        <img src={waveCnkav} alt="" className="w-3/5 py-5" />
        <img src={waveER} alt="" className="w-3/5 py-5" />

        <button className="bg-white text-black py-3 w-4/6 mt-12 rounded-xl">
          Load More
        </button>
      </div>
    </div>
  );
};

export default AffiliatedTools;
