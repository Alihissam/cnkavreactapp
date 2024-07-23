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
      <div className="fixed w-full px-[1.5rem]  shadow-md py-8 navbar">
        <div className="flex items-center justify-between">
          <div className="flex gap-12 items-center">
            <img src={cnkavLogo} alt="Logo" className="h-24 w-24" />
            <nav className="hidden text-lg  md:flex space-x-12 text-[17px] ml-16 items-baseline">
              <Link className="text-white font-bold" to="/">
                Home
              </Link>
              <div className="relative group flex items-center dropdown">
                <Link
                  className="hover:text-white text-[##7A7A7A] cursor-pointer"
                  to="/"
                  onClick={(e) => {
                    if (window.location.pathname !== "/") {
                      e.preventDefault();
                      window.location.href = "/";
                    }
                    setTimeout(() => {
                      document.getElementById("influewave-section").scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  Influewave
                </Link>
                <img
                  src={dropDownIcon}
                  className="h-6 bg-white rounded-full ml-2 transition-transform duration-300 ease-in-out transform hover:translate-x-1"
                  alt="Dropdown Icon"
                />
                <div className="absolute hidden group-hover:block w-[220px] bg-white text-black mt-[100px] leading-2  shadow-lg">
               
                </div>
              </div>
              <Link
                onClick={() => {
                  document.getElementById("exclusive-section").scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-white text-gray-400"
                to="/"
              >
                Exclusive Room
              </Link>

              <Link
                className="hover:text-white text-[##7A7A7A]"
                to="#"
                onClick={() => setCardVisible(true)}
              >
                Pricing
              </Link>
              <Link
                className="hover:text-white text-[##7A7A7A]"
                to="contact-step1"
              >
                Contact Us
              </Link>
            </nav>
          </div>
          <button
            onClick={() => setModal(!isModal)}
            className="hidden font-bold cursor-pointer md:flex items-center border border-white px-7 py-3 rounded-md text-white transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="text-white ">Join Us</span>
            <img
              src={arrowIcon}
              className="bg-white rounded-full h-6 ml-2 transition-transform duration-300 ease-in-out transform hover:translate-x-1   hover:scale-110 hover:rotate-45"
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
