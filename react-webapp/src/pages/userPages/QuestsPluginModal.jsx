import React from "react";
import QuestsCategory from "./questsManipulations/QuestsCategory";
import QuestsRank from "./questsManipulations/QuestsRank";
import QuestsStyles from "./questsManipulations/QuestsStyles";
import { cameraIcon, cnkavLogo } from "../../images";

const QuestsPluginModal = ({ setIsModalVisible }) => {
  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-75 flex items-center joinModal justify-center p-6 overflow-y-auto w-full">
      <div className="bg-black rounded-lg shadow-lg w-full max-w-md overflow-y-auto max-h-full mt-20 ">
        <div className="flex justify-end p-4 ">
          <button
            onClick={() => setIsModalVisible(false)}
            className="text-2xl text-white hover:text-gray-400 transition duration-200"
          >
            &times;
          </button>
        </div>
        <div className="flex justify-center">
          <img src={cnkavLogo} alt="" className="h-20 mb-10" />
        </div>

        <form className="space-y-4 px-6 pb-6 ">
          <QuestsCategory />

          <QuestsRank />

          <QuestsStyles />

          <input
            type="text"
            className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Select Quest Plugin"
          />
          <div className="pt-6">
            <button
              type="submit"
              className="rounded-3xl w-full  text-white py-3 px-4 font-bold"
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
        <div className="flex flex-col bg-white p-4 justify-center mx-4 my-4 space-y-4">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Quest Plugin Title"
              className="w-[75%] rounded-2xl bg-gray-200 "
            />
            <button className="w-[30%] rounded-2xl text-red-600 font-bold bg-gray-400 border-none">
              Last Update
            </button>
          </div>
          <div className="h-[160px] p-4 bg-gray-200 mx-8 rounded-xl flex justify-center items-center">
            <img src={cameraIcon} alt="" className="h-10" />
          </div>
          <div className="bg-gray-200 rounded-2xl">
            <QuestsCategory />
          </div>
          <div className="h-auto p-4 bg-gray-200 text-black rounded-xl ">
            <p>Quest Description Plugin</p>
            <ul contenteditable="true">
              <li>1: Edit me and write here</li>
              <li>2: Edit me</li>
              <li>3: Edit me</li>
              <li>4: Edit me</li>
              <li>5: Edit me</li>
            </ul>
          </div>
          <button
            type="submit"
            className=" w-full text-sm  text-gray-500 py-1 px-4 font-bold"
            style={{
              border: "2px solid transparent",
              borderImage: "linear-gradient(120deg, red, yellow)",
              borderImageSlice: 1,
            }}
          >
            Download and Attach to Quest
          </button>
        </div>
        <div className="flex flex-col bg-white p-4 justify-center mx-4 my-4 space-y-4">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Quest Plugin Title"
              className="w-[75%] rounded-2xl bg-gray-200 "
            />
            <button className="w-[30%] rounded-2xl text-red-600 font-bold bg-gray-400 border-none">
              Last Update
            </button>
          </div>
          <div className="h-[160px] p-4 bg-gray-200 mx-8 rounded-xl flex justify-center items-center">
            <img src={cameraIcon} alt="" className="h-10" />
          </div>
          <div className="bg-gray-200 rounded-2xl">
            <QuestsCategory />
          </div>
          <div className="h-auto p-4 bg-gray-200 text-black rounded-xl ">
            <p>Quest Description Plugin</p>
            <ul contenteditable="true">
              <li>1: Edit me and write here</li>
              <li>2: Edit me</li>
              <li>3: Edit me</li>
              <li>4: Edit me</li>
              <li>5: Edit me</li>
            </ul>
          </div>
          <button
            type="submit"
            className=" w-full text-sm  text-gray-500 py-1 px-4 font-bold"
            style={{
              border: "2px solid transparent",
              borderImage: "linear-gradient(120deg, red, yellow)",
              borderImageSlice: 1,
            }}
          >
            Download and Attach to Quest
          </button>
        </div>
        <div className="flex flex-col bg-white p-4 justify-center mx-4 my-4 space-y-4">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Quest Plugin Title"
              className="w-[75%] rounded-2xl bg-gray-200 "
            />
            <button className="w-[30%] rounded-2xl text-red-600 font-bold bg-gray-400 border-none">
              Last Update
            </button>
          </div>
          <div className="h-[160px] p-4 bg-gray-200 mx-8 rounded-xl flex justify-center items-center">
            <img src={cameraIcon} alt="" className="h-10" />
          </div>
          <div className="bg-gray-200 rounded-2xl">
            <QuestsCategory />
          </div>
          <div className="h-auto p-4 bg-gray-200 text-black rounded-xl ">
            <p>Quest Description Plugin</p>
            <ul contenteditable="true">
              <li>1: Edit me and write here</li>
              <li>2: Edit me</li>
              <li>3: Edit me</li>
              <li>4: Edit me</li>
              <li>5: Edit me</li>
            </ul>
          </div>
          <button
            type="submit"
            className=" w-full text-sm  text-gray-500 py-1 px-4 font-bold"
            style={{
              border: "2px solid transparent",
              borderImage: "linear-gradient(120deg, red, yellow)",
              borderImageSlice: 1,
            }}
          >
            Download and Attach to Quest
          </button>
        </div>
        <div className="flex justify-center py-4">
          <button className="w-[70%] py-3 bg-white text-black rounded-lg hover:bg-gray-900 transition duration-300">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestsPluginModal;
