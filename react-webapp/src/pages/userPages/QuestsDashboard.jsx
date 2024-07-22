import React, { useState } from "react";
import PublishNewQuestModal from "./PublishNewQuestModal";

const QuestsDashboard = () => {
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

  const handlePublishNewQuestClick = () => {
    setIsPublishModalOpen(true);
  };

  const handlePublishNewQuestClose = () => {
    setIsPublishModalOpen(false);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2  bg-black ">
      <div className="flex flex-col justify-center  mt-32">
        <form className="">
          <div className="my-6">
            <input
              type="text"
              id="questName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Select Quest Status"
            />
          </div>
          {/* Publish Quest */}
          <div>
            <input
              type="text"
              id="questName"
              onClick={handlePublishNewQuestClick}
              readOnly
              className="bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"
              placeholder="Publish New Quest"
            />
          </div>
          <div className="my-6">
            <input
              type="text"
              id="questName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Search Quest"
            />
          </div>
        </form>
        <div className="bg-white h-auto w-[600px] mt-20 text-black">
          <div className="flex flex-row justify-center mt-4">
            <input
              type="text"
              value="Quest Title"
              className="w-full rounded-xl bg-gray-700 text-white ml-2  py-1 "
            />
            <input
              type="text"
              value="Quest Status"
              className="w-1/5 rounded-xl bg-gray-700 text-white mr-2 py-1"
            />
          </div>
          <div className="main-conteent flex flex-row justify-between">
            <div className="left-list w-3/4">
              <input
                type="text"
                value="Category"
                className="bg-gray-400 mx-2 mt-3 rounded-xl w-[430px]"
              />
              <div>
                <ul className="bg-gray-200 py-2 mx-2 rounded-xl h-[250px] p-2 mt-2">
                  <li>item5</li>
                  <li>item5</li>
                  <li>item5</li>
                  <li>item5</li>
                  <li>item5</li>
                </ul>
              </div>
            </div>
            <div className="right-buttons flex flex-col w-3/12">
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Attach Quest plugin
              </button>
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Delete
              </button>
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Edit
              </button>
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Update Status
              </button>
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Book Meeting
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white h-auto w-[600px] mt-20 text-black">
          <div className="flex flex-row justify-center mt-4">
            <input
              type="text"
              value="Quest Title"
              className="w-full rounded-xl bg-gray-700 text-white ml-2  py-1 "
            />
            <input
              type="text"
              value="Quest Status"
              className="w-1/5 rounded-xl bg-gray-700 text-white mr-2 py-1"
            />
          </div>
          <div className="main-conteent flex flex-row justify-between">
            <div className="left-list w-3/4">
              <input
                type="text"
                value="Ctegory"
                className="bg-gray-400 mx-2 mt-3 rounded-xl w-[430px]"
              />
              <div>
                <ul className="bg-gray-200 py-2 mx-2 rounded-xl h-[250px] p-2 mt-2">
                  <li>item5</li>
                  <li>item5</li>
                  <li>item5</li>
                  <li>item5</li>
                  <li>item5</li>
                </ul>
              </div>
            </div>
            <div className="right-buttons flex flex-col w-3/12">
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Attach Quest plugin
              </button>
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Delete
              </button>
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Edit
              </button>
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Update Status
              </button>
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Book Meeting
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white h-auto w-[600px] mt-20 text-black">
          <div className="flex flex-row justify-center mt-4">
            <input
              type="text"
              value="Quest Title"
              className="w-full rounded-xl bg-gray-700 text-white ml-2  py-1 "
            />
            <input
              type="text"
              value="Quest Status"
              className="w-1/5 rounded-xl bg-gray-700 text-white mr-2 py-1"
            />
          </div>
          <div className="main-conteent flex flex-row justify-between">
            <div className="left-list w-3/4">
              <input
                type="text"
                value="Ctegory"
                className="bg-gray-400 mx-2 mt-3 rounded-xl w-[430px]"
              />
              <div>
                <ul className="bg-gray-200 py-2 mx-2 rounded-xl h-[250px] p-2 mt-2">
                  <li>item5</li>
                  <li>item5</li>
                  <li>item5</li>
                  <li>item5</li>
                  <li>item5</li>
                </ul>
              </div>
            </div>
            <div className="right-buttons flex flex-col w-3/12">
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Attach Quest plugin
              </button>
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Delete
              </button>
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Edit
              </button>
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Update Status
              </button>
              <button className="border py-2 my-2 mx-2 rounded-xl border-red-500">
                Book Meeting
              </button>
            </div>
          </div>
        </div>

        <button className="bg-white text-black py-3 w-4/6 mt-12 rounded-xl">
          Load More
        </button>
      </div>
      <PublishNewQuestModal
        isOpen={isPublishModalOpen}
        onClose={handlePublishNewQuestClose}
      />
    </div>
  );
};

export default QuestsDashboard;
