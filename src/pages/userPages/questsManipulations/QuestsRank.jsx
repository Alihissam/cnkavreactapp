import React, { useState } from "react";

const QuestsRank = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [category, setCategory] = useState("");
  const categories = [
    " Rank",
    "Rookie",
    "Single Star",
    "Double Star",
    "Triple Star",
    "S Rank",
  ];

  const handleInputClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    setCategory(option);
    setShowDropdown(false);
  };
  return (
    <div className="relative">
      <input
        type="text"
        id="questName"
        value={category}
        onClick={handleInputClick}
        readOnly
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Quest Rank"
      />
      {showDropdown && (
        <ul className="absolute z-10 bg-black border text-white border-gray-300  mt-1 rounded-lg w-full">
          {categories.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer p-2 hover:bg-gray-200 hover:text-black"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuestsRank;
