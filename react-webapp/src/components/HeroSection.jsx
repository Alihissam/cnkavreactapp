import React from "react";
import {
  nextIcons,
  arrowIcon,
  monyImage,
  FiverStars1,
  FiverStars2,
  FiverStars3,
  FiverStars4,
  FiverStars5,
  FiverStars6,
  starsGroup,
  modalMan,
  labImage,
} from "../images";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: FiverStars1,
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: FiverStars2,
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: FiverStars3,
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: FiverStars4,
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: FiverStars5,
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: FiverStars6,
  },
];

export default function HeroSection() {
  return (
    <section className="md:pt-64 pt-36 flex flex-col-reverse md:flex-row px-2 relative">
      <div className="absolute inset-0 grid grid-cols-10 gap-6 mt-32 z-0">
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
      </div>
      <div className="container mx-auto px-1 py-20 md:w-1/2 z-20">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">
          Different Social
        </h1>
        <h2 className="text-xl mb-6">
          Quest, Connect & Earn:
          <span className="font-semibold text-gray-400">An Exclusive Club</span>
        </h2>
        <p className="text-lg mb-6">
          Welcome to a place where you don't just connect, you form alliances -
          meld creativity and skills, and produce something outstanding. From
          hobbyists seeking advice to professionals exchanging expertise; you're
          one chat away from unlocking new possibilities.
        </p>
        <div className="flex items-center mb-6 mt-12">
          <div className="flex items-center">
            <AnimatedTooltip cursorClassName="bg-red" items={people} />
            <div className="ml-10 flex items-center">
              <div>
                <p>Amazing Members</p>
                <img
                  src={starsGroup}
                  alt="Five Stars"
                  className="transition-transform duration-300 ease-in-out transform hover:translate-y-2"
                />
              </div>

              <img
                src={nextIcons}
                className="h-4 ml-4 transition-transform duration-300 ease-in-out transform hover:translate-x-1"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <button className="hidden md:flex items-center border border-white px-8 py-2.5 rounded-md text-white transition-transform duration-300 ease-in-out transform hover:scale-105">
            <span>Secure my Spot</span>
            <img
              src={arrowIcon}
              className="bg-white rounded-full h-6 ml-2 transition-transform duration-300 ease-in-out transform hover:translate-x-1"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="z-20 pr-20">
        <div className="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
          <img
            src={modalMan}
            alt="Image 1"
            className="w-[218px] h-[270px] object-cover rounded-lg mb-4"
          />

          <div className="z-10">
            <img
              src={monyImage}
              alt="Image 2"
              className="w-[218px] h-[214px] object-cover rounded-lg mb-4"
            />
            <h3 className="md:text-4xl text-2xl font-bold text-gray-400">
              Amazing
            </h3>
            <p className="  text-gray-400">Network of Exclusive Club</p>
          </div>
        </div>
        <div className="bg-black p-4 rounded-lg mt-2">
          <img
            src={labImage}
            alt="Image 3"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
        </div>
      </div>
    </section>
  );
}
