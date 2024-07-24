import React from "react";

const CommunityChats = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-8 bg-gray-900">
      <div className="w-full max-w-lg mt-16">
        <h1 className="text-white text-2xl text-center my-40">
          Community Chat
        </h1>
        <form className="space-y-4 flex flex-col justify-center items-center">
          <input
            type="text"
            id="searchChat"
            className="bg-white border border-gray-700 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Search Chat Communication"
          />
          <input
            type="text"
            id="search"
            className="bg-white  border border-gray-700 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Search"
          />
          <input
            type="text"
            id="loadChat"
            className="bg-white  border border-gray-700 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-3"
            placeholder="Load Chat or Chat Room Here"
          />
        </form>

        <div className="flex justify-center ">
          <button className="bg-white  text-black py-3 w-[70%] mt-8 rounded-lg hover:bg-black hover:text-white transition duration-300">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityChats;
