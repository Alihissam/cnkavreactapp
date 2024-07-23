import React, { useState } from "react";
import { questsBox1, questsBox2 } from "../../images";
import QuestsCategory from "./questsManipulations/QuestsCategory";
import QuestsStyles from "./questsManipulations/QuestsStyles";
import PublishNewQuestModal from "./PublishNewQuestModal";
import QuestsVerificationModal from "./QuestsVerificationModal";

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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <div className="flex flex-col justify-center items-center mt-32">
        <form className="space-y-4 py-5 w-2/3">
          <QuestsCategory />
          <QuestsStyles />
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
          <div>
            <input
              type="text"
              placeholder="Search Quests"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
        </form>

        <p className="border p-3 my-10"> Click on Image to Edit Quest</p>
        <button
          onClick={handlePublishNewQuestClick}
          className="flex justify-center"
        >
          <img
            src={questsBox1}
            alt="Quests Box"
            className="w-3/4 py-5 transition-transform duration-300 ease-out transform hover:scale-105"
          />
        </button>
        <p className="border p-3 my-10"> Click on Image to Verify Quest</p>
        <button
          onClick={handleVerificationClick}
          className="flex justify-center"
        >
          <img
            src={questsBox2}
            alt="Quests Box"
            className="w-[60%] y-5 transition-transform duration-300 ease-out transform hover:scale-105"
          />
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
