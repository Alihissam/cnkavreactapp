import React from "react";
import { twitterPost } from "../../images";

const Community = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2  bg-black ">
      <div className="flex flex-col justify-center items-center mt-32">
        <form className="space-y-4 py-5 w-full">
          <div>
            <input
              type="text"
              id="questName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Select Chat Communities"
            />
          </div>

          <div>
            <input
              type="text"
              id="questName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Search"
            />
          </div>
        </form>

        <img src={twitterPost} alt="" className="w-3/4 py-5" />
        <img src={twitterPost} alt="" className="w-3/4 py-5" />
        <img src={twitterPost} alt="" className="w-3/4 py-5" />

        <button className="bg-white text-black py-3 w-4/6 mt-12 rounded-xl">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Community;
