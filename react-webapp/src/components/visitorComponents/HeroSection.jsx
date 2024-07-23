import React from 'react';
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
  herobg,
} from '../../images';
import { AnimatedTooltip } from '../ui/animated-tooltip';
import { Link } from 'react-router-dom';

const people = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    image: FiverStars1,
  },
  {
    id: 2,
    name: 'Robert Johnson',
    designation: 'Product Manager',
    image: FiverStars2,
  },
  {
    id: 3,
    name: 'Jane Smith',
    designation: 'Data Scientist',
    image: FiverStars3,
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'UX Designer',
    image: FiverStars4,
  },
  {
    id: 5,
    name: 'Tyler Durden',
    designation: 'Soap Developer',
    image: FiverStars5,
  },
  {
    id: 6,
    name: 'Dora',
    designation: 'The Explorer',
    image: FiverStars6,
  },
];

export default function HeroSection() {
  return (
    <section className=" md:pt-[20rem] pt-36  flex flex-col-reverse md:flex-row  relative">
      <div
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80%',
          width: '100%',
          top: 150,
          bottom: 0,
          opacity:0.9
        
        }}
        className="absolute bg-gray-950"
      ></div>
      {/* <div className="bg-gray-800 opacity-40"> */}
      {/* <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>
        <div className="bg-gray-800 opacity-40"></div>  */}
      <div className="py-20 px-[2rem] md:w-[60%] z-20 ">
        <h1 className="text-white text-6xl md:text-7xl font-extrabold mb-4">
          Different Social
        </h1>
        <h2 className="text-2xl mb-6">
          Quest, Connect & Earn:
          <span className="font-semibold text-gray-400">
            {' '}
            An Exclusive Club
          </span>
        </h2>
        <p className="text-xl mb-6 leading-relaxed">
          Welcome to a place where you don't just connect, you form alliances -
          meld creativity and skills, and produce something outstanding. From
          hobbyists seeking advice to professionals exchanging expertise; you're
          one chat away from unlocking new possibilities.
        </p>
        <div className="flex items-center mb-6 mt-12">
          <div className="flex items-center">
            <AnimatedTooltip cursorClassName="bg-red" items={people} />
            <div className="ml-10 flex items-center">
              <Link to="/aboutus">
                <p>Amazing Members</p>
                <img
                  src={starsGroup}
                  alt="Five Stars"
                  className="transition-transform duration-300 ease-in-out transform hover:translate-y-2"
                />
              </Link>

              <Link to="aboutus">
                <img
                  src={nextIcons}
                  className="h-4 ml-4 transition-transform duration-300 ease-in-out transform  hover:scale-110 hover:-rotate-90"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Link
            to="subscriptions"
            className="hidden md:flex items-center border border-white w-[35%] pl-8 py-2.5 rounded-md text-white transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <span>Secure my Spot</span>
            <img
              src={arrowIcon}
              className="bg-white rounded-full h-6 ml-2 transition-transform duration-300 ease-in-out transform hover:translate-x-1 hover:scale-110 hover:rotate-45"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="z-20 px-[2rem] mr-8">
        <div className="grid gap-2  grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <img src={modalMan} alt="Image 1" className="w-full h-96" />
          <div className="z-10 space-y-2">
            <img src={monyImage} alt="Image 2" className="w-full  rounded-lg" />
            <h3 className="md:text-5xl text-2xl font-extrabold text-gray-400">
              Amazing
            </h3>
            <p className="text-gray-200 text-lg">Network of Exclusive Club</p>
          </div>
        </div>
        <div className="bg-black p-4 rounded-lg mt-2">
          <img
            src={labImage}
            alt="Image 3"
            className="w-full object-cover rounded-lg mb-4"
          />
        </div>
      </div>
    </section>
  );
}
