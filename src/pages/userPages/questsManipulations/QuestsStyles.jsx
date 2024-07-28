import React, { useState } from "react";

const QuestStyles = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [questStyle, setQuestStyle] = useState("");

  const questStyles = [
    "On-site",
    "Travel",
    "Remote",
    "On-site Party Task (Task with online group)",
    "Partly on-site and Remote",
    "On-site Group Task (Task with a group)",
    "Travel Party Task (Task with online group)",
    "Travel Group Task (Task with a group)",
    "Remote Party Task (Task with online group)",
    "Remote Group Task (Task with a group)",
    "Partly on-site and Remote Party Task (Task with online group)",
    "Partly on-site and Remote Group Task (Task with a group)",
  ];

  const handleInputClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    setQuestStyle(option);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        id="questStyle"
        value={questStyle}
        onClick={handleInputClick}
        readOnly
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Quest Style"
      />
      {showDropdown && (
        <ul className="absolute z-10 bg-black border border-gray-300 mt-1 rounded-lg w-full">
          {questStyles.map((option, index) => (
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

export default QuestStyles;
