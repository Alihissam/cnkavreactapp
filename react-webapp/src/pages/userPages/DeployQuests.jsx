import React, { useState } from "react";
import { cameraIcon } from "../../images";
import DeployQuestsModal from "./DeployQuestsModal";

const DeployQuests = () => {
  const [isDeployQuestsModal, setDeployQuestsModal] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <div className="flex flex-col justify-center mt-32">
        <form className="">
          <div className="my-6">
            <input
              type="text"
              id="questName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Search"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="my-6 w-3/6">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-left text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Search Options"
              />
            </div>
            <div className="my-6 w-3/6">
              <button
                type="button"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-left"
                onClick={() => setDeployQuestsModal(!isDeployQuestsModal)}
              >
                Deploy Quest Plugin
              </button>
            </div>
          </div>
        </form>
        <div className="bg-white h-auto w-[600px] mt-20 text-black">
          <div className="flex flex-row justify-center mt-4">
            <input
              type="text"
              placeholder="Quest Plugin Title"
              className="w-full rounded-xl bg-gray-700 text-white ml-2 py-1"
            />
            <button className="w-1/5 rounded-xl bg-gray-700 text-white mr-2 py-1">
              Upload
            </button>
            <button className="w-1/5 rounded-xl bg-gray-700 text-white mr-2 py-1">
              Edit
            </button>
            <button className="w-1/5 rounded-xl bg-gray-700 text-white mr-2 py-1">
              Delete
            </button>
          </div>
          <div
            className="bg-gray-400 px-4 rounded-2xl py-4 mx-24 h-[200px] my-4"
            onClick={() => {
              const fileInput = document.createElement("input");
              fileInput.type = "file";
              fileInput.click();
            }}
          >
            <div className="flex justify-center pt-12">
              <img src={cameraIcon} alt="" className="h-16" />
            </div>
          </div>

          <div className="main-content flex flex-row justify-between">
            <div className="left-list w-3/4">
              <input
                type="text"
                placeholder="Category"
                className="bg-gray-400 mx-2 mt-3 rounded-xl w-[430px] placeholder-white"
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
      </div>

      <div className="flex justify-center w-3/5">
        <button className="bg-white text-black py-3 w-4/6 mt-12 rounded-xl">
          Load More
        </button>
      </div>
      {isDeployQuestsModal && (
        <DeployQuestsModal setDeployQuestsModal={setDeployQuestsModal} />
      )}
    </div>
  );
};

export default DeployQuests;
