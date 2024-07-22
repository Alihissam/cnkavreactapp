import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cnkavLogo, dropDownIcon, arrowIcon } from "../../images";
import JoinUsModal from "./JoinUsModal";
import PricingModal from "./PricingModal";

export default function NavBar() {
  const [isModal, setModal] = useState(false);
  const [isCardVisible, setCardVisible] = useState(false);

  return (
    <>
      <div className="fixed w-full z-10 shadow-md px-10 py-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-12 items-center">
            <img src={cnkavLogo} alt="Logo" className="h-20" />
            <nav className="hidden md:flex space-x-12 text-[17px] ml-20 items-baseline">
              <Link className="text-white font-bold" to="/">
                Home
              </Link>
              <div className="relative group flex items-center">
                <Link
                  className="hover:text-white text-gray-400"
                  to="#"
                  id="influewave-link"
                >
                  Influewave
                </Link>
                <img
                  src={dropDownIcon}
                  className="h-6 bg-white rounded-full ml-2 transition-transform duration-300 ease-in-out transform hover:translate-x-1"
                  alt="Dropdown Icon"
                />
                <div className="absolute hidden group-hover:block w-[220px] bg-white text-black mt-[150px] leading-2  shadow-lg">
                  <Link
                    to="/register"
                    className="block px-4 py-2 hover:bg-black hover:text-white"
                  >
                    Register
                  </Link>
                  <Link
                    to="/quests"
                    className="block px-4 py-2 hover:bg-black hover:text-white"
                  >
                    Quest
                  </Link>
                  <Link
                    to="/affilink"
                    className="block px-4 py-2 hover:bg-black hover:text-white"
                  >
                    Affilink Listing Request
                  </Link>
                </div>
              </div>
              <Link className="hover:text-white text-gray-400" to="exclusive">
                Exclusive Room
              </Link>

              <Link
                className="hover:text-white text-gray-400"
                to="#"
                onClick={() => setCardVisible(true)}
              >
                Pricing
              </Link>
              <Link className="hover:text-white text-gray-400" to="contact">
                Contact Us
              </Link>
            </nav>
          </div>
          <button
            onClick={() => setModal(!isModal)}
            className="hidden cursor-pointer md:flex items-center border border-white px-8 py-2 rounded-md text-white transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <span>Join Us</span>
            <img
              src={arrowIcon}
              className="bg-white rounded-full h-6 ml-2 transition-transform duration-300 ease-in-out transform hover:translate-x-1"
              alt=""
            />
          </button>
        </div>
      </div>
      {isModal && <JoinUsModal isModal={isModal} setModal={setModal} />}
      {isCardVisible && <PricingModal setCardVisible={setCardVisible} />}
    </>
  );
}
