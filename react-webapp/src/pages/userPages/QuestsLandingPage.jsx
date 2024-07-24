import React, { useState } from "react";
import { questsBox1, questsBox2 } from "../../images";
import QuestsCategory from "./questsManipulations/QuestsCategory";
import QuestsStyles from "./questsManipulations/QuestsStyles";
import PublishNewQuestModal from "./PublishNewQuestModal";
import QuestsVerificationModal from "./QuestsVerificationModal";
import { FaEdit } from "react-icons/fa";

const QuestslandingPage = () => {
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

  const handlePublishNewQuestClick = () => {
    setIsPublishModalOpen(true);
  };

  const handlePublishNewQuestClose = () => {
    setIsPublishModalOpen(false);
  };

  const handleVerificationClick = () => {
    setIsVerificationModalOpen(true);
  };

  const handleVerificationClose = () => {
    setIsVerificationModalOpen(false);
  };

  return (
    <div className="flex flex-col   items-center w-full justify-center min-h-screen py-2 ">
      <div className="flex flex-col justify-center  items-center pt-48">
        <form className="space-y-4 p-6  mb-4 w-[380px] md:w-[500px]">
          <QuestsCategory />
          <QuestsStyles />
          <div>
            <input
              type="text"
              id="questName"
              onClick={handlePublishNewQuestClick}
              readOnly
              className="bg-gray-50 border w-full text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 cursor-pointer"
              placeholder="Publish New Quest"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search Quests w-full"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
        </form>

        <p className="border p-3 my-10"> Click on Image to Edit Quest</p>
        <button className="flex justify-center">
          <div className="w-[360px] md:w-[500px]  relative bg-red-200 ">
            <div className="bg-red-400 absolute right-0 rounded-md p-1 mt-[-10px]">
              <span className="font-bold">€ 0</span> Double Start, Single
              Star,Rookies
            </div>
            <div className="flex justify-between items-center py-8 bg-gray-600 px-5">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full w-12 h-12"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
                <p className="text-xl">Kikexi</p>
              </div>
              <p className="text-white text-2xl">Discussion about...</p>
            </div>
            <div className="bg-gray-800">
              <p className="text-white text-1xl font-semibold py-10">
                Philothory task
              </p>
            </div>

            <div className="flex justify-center items-center py-4 bg-gray-600 px-8">
              <div className="flex items-center gap-2">
                <div
                  onClick={handlePublishNewQuestClick}
                  className="bg-blue-700 px-10 py-5"
                >
                  <FaEdit />
                </div>
              </div>
            </div>
          </div>
        </button>

        <button className="flex justify-center ">
          <div className="w-[360px] md:w-[500px]  relative bg-red-200 mt-10">
            <div className="bg-red-400 absolute right-0 rounded-md p-1 mt-[-10px]">
              <span className="font-bold">€ 0</span> Double Start, Single
              Star,Rookies
            </div>
            <div className="flex justify-between items-center py-8 bg-gray-600 px-5">
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full w-12 h-12"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
                <p className="text-xl">Kikexi</p>
              </div>
              <p className="text-white text-2xl">Discussion about...</p>
            </div>
            <div className="bg-gray-800">
              <p className="text-white text-1xl font-semibold py-10">
                Philothory task
              </p>
            </div>

            <div className="flex justify-center items-center py-4 bg-gray-600 px-8">
              <div className="flex items-center gap-2 ">
                <div
                  onClick={handleVerificationClick}
                  className="bg-blue-700 px-8 py-8 rounded-full"
                >
                  <FaEdit />
                </div>
              </div>
            </div>
          </div>
        </button>

        <button className="bg-white text-black py-3 w-4/6 mt-12 rounded-xl">
          Load More
        </button>
      </div>
      <PublishNewQuestModal
        isOpen={isPublishModalOpen}
        onClose={handlePublishNewQuestClose}
      />
      <QuestsVerificationModal
        isOpen={isVerificationModalOpen}
        onClose={handleVerificationClose}
        questDetails={{
          title: "Sample Quest Title",
          description: "Sample quest description.",
          category: "Digital Marketing",
          style: "Remote",
        }}
      />
    </div>
  );
};

export default QuestslandingPage;
