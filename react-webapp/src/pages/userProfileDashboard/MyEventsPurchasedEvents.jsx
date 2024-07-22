import React from "react";

const MyEventsPurchasedEvents = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-8 bg-gray-900">
      <div className="w-full max-w-lg mt-16">
        <form className="space-y-4">
          <input
            type="text"
            id="searchChat"
            className="bg-white border-gray-700 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Select Event Type"
          />
          <input
            type="text"
            id="search"
            className="bg-white border border-gray-700 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Search"
          />
          <input
            type="text"
            id="loadChat"
            className="bg-white border border-gray-700 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Post New Community Event"
          />
          <div className="mt-20 flex justify-center">
            <input
              type="text"
              id="loadChat"
              className="bg-white mt-10 border border-gray-700 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-3"
              placeholder="Load Events here from the Selection"
            />
          </div>
        </form>

        <div className="flex justify-center">
          <button className="bg-white text-black py-3 w-3/4 mt-8 rounded-lg hover:bg-black hover:text-white transition duration-300">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyEventsPurchasedEvents;
