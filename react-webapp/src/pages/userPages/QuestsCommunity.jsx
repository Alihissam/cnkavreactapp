import React from 'react';

const CommunityChats = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20 py-24">
        <div className="w-full max-w-lg mt-8">
          <form className="space-y-4 flex flex-col justify-center items-center">
            <select
              id="eventType"
              className="bg-white border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            >
              <option value="" disabled selected>
                Select Chat Communities
              </option>
              <option value="conference">Community Chat</option>
              <option value="workshop">Quest Community</option>
              <option value="webinar">Exclusive Room Chat</option>
            </select>
            <div className="relative w-full">
              <input
                type="text"
                id="search"
                className="bg-white border border-gray-700 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 pr-10"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row ">
        <div className="w-full md:w-1/4 p-4 border-b  md:border border-gray-200">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search (Ctrl+/)"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold" style={{ color: '#726BE8' }}>
              Chats
            </h2>
          </div>
          <div>
            <ul>
              <li className="flex items-center p-2 mb-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  NM
                </div>
                <div className="ml-2">
                  <p className="font-semibold text-gray-700">Natalie Maxwell</p>
                  <p className="text-sm" style={{ color: '#BDBDBD' }}>
                    UI/UX Designer
                  </p>
                </div>
              </li>
              <li className="flex items-center p-2 mb-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  JC
                </div>
                <div className="ml-2">
                  <p className="font-semibold text-gray-700">Jess Coock</p>
                  <p className="text-sm" style={{ color: '#BDBDBD' }}>
                    Business Analyst
                  </p>
                </div>
              </li>
              <li className="flex items-center p-2 mb-2">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                  LM
                </div>
                <div className="ml-2">
                  <p className="font-semibold text-gray-700">Louie Mason</p>
                  <p className="text-sm" style={{ color: '#BDBDBD' }}>
                    Business Executive
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 flex flex-col border border-gray-500">
          <div className="flex items-center justify-between p-4  border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                FR
              </div>
              <div className="ml-2">
                <p className="font-semibold text-white">Felecia Rower</p>
                <p className="text-sm text-gray-500">NextJS Developer</p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                FR
              </div>
              <div className="ml-2">
                <div className="bg-gray-100 p-2 rounded">
                  <p className="text-gray-700">
                    Hey John, I am looking for the best admin template. Could
                    you please help me to find it out?
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-1">10:02 AM</p>
              </div>
            </div>
            <div className="flex items-end justify-end mb-4">
              <div className="mr-2">
                <div className="bg-[#7367F0] p-2 rounded">
                  <p className="text-white">
                    Hi. What are your business hours?
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-1 text-right">
                  10:03 AM
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                J
              </div>
            </div>
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                FR
              </div>
              <div className="ml-2">
                <div className="bg-gray-100 p-2 rounded">
                  <p className="text-whit">
                    Thanks. Can I book an appointment for Wednesday at 10 AM?
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-1">10:05 AM</p>
              </div>
            </div>
            <div className="flex items-end justify-end mb-4">
              <div className="mr-2">
                <div className="bg-[#7367F0] p-2 rounded">
                  <p className="text-whit">
                    We are open Mon-Fri, 9 AM to 5 PM.
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-1 text-right">
                  10:03 AM
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                J
              </div>
            </div>
          </div>

          <div className="p-4  border-t ">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type your message here"
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <button className="ml-2 p-2 bg-blue-500 text-white rounded">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityChats;
