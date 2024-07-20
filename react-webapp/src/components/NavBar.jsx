import React from 'react';
import {drop,LogoImage} from '../images'
export default function NavBar() {
  return (
    <>
      <div className="fixed w-full shadow-md px-10 py-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-12 items-center">
            <img
              src={LogoImage}
              alt="Logo"
              className="h-20"
            />
            <nav
              className="hidden md:flex space-x-12 text-[17px] ml-20 items-baseline"
            >
              <a className="text-white font-bold" href="#">Home</a>
              <div className="relative group flex items-center">
                <a
                  className="hover:text-white text-gray-400"
                  href="#"
                  id="influewave-link"
                >Influewave</a>
                <img
                  src={drop}
                  className="h-6 bg-white rounded-full ml-2"
                  alt="Dropdown Icon"
                />
              </div>
              <a className="hover:text-white text-gray-400" href="#"
              >Exclusive Room</a>
              <a className="hover:text-white text-gray-400" href="#">Pricing</a>
              <a className="hover:text-white text-gray-400" href="#">Contact Us</a>
            </nav>
          </div>
          <button
            className="hidden md:flex items-center border border-white px-8 py-2 rounded-md text-white"
          >
            <span>Join Us</span>
            <img
              src="./images/arrow.png"
              className="bg-white rounded-full h-6 ml-2"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
}
