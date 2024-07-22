import React from "react";

const Chats = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2  bg-black ">
      <div className=" mt-32">
        <form className="space-y-4 py-5 w-2/3">
          <input
            type="text"
            id="questName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Search Chat Communication"
          />
          <input
            type="text"
            id="questName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Search"
          />
          <input
            type="text"
            id="questName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Load Chat or Chat Room Here from the"
          />
        </form>

        <button className="bg-white text-black py-3 w-4/6 mt-12 rounded-xl">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Chats;
