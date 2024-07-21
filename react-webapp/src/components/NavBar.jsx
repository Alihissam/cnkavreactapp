import React, { useState } from "react";
import { arrowIcon, dropDownIcon, cnkavLogo } from "../images";
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
              <a className="text-white font-bold" href="/">
                Home
              </a>
              <div className="relative group flex items-center">
                <a
                  className="hover:text-white text-gray-400"
                  href="#"
                  id="influewave-link"
                >
                  Influewave
                </a>
                <img
                  src={dropDownIcon}
                  className="h-6 bg-white rounded-full ml-2"
                  alt="Dropdown Icon"
                />
              </div>
              <a className="hover:text-white text-gray-400" href="#">
                Exclusive Room
              </a>
              <a
                className="hover:text-white text-gray-400"
                href="#"
                onClick={() => setCardVisible(true)}
              >
                Pricing
              </a>
              <a className="hover:text-white text-gray-400" href="/contact">
                Contact Us
              </a>
            </nav>
          </div>
          <button
            onClick={() => setModal(!isModal)}
            className="hidden cursor-pointer md:flex items-center border border-white px-8 py-2 rounded-md text-white"
          >
            <span>Join Us</span>
            <img
              src={arrowIcon}
              className="bg-white rounded-full h-6 ml-2"
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
