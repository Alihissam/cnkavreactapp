import React, { useState } from "react";

const QuestCategory = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [category, setCategory] = useState("");
  const categories = [
    "One Time Tasks",
    "Necessity Tasks",
    "E sports",
    "Digital Marketing",
    "Software Development",
    "Gaming",
    "Cooperate Task",
    "Monthly Recurring Task",
    "Looking for a product",
    "Philanthropy Task",
    "Collecting Task",
    "Trading",
    "Coaching",
    "Consulting",
    "AI",
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
        placeholder="Select Category"
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

export default QuestCategory;
