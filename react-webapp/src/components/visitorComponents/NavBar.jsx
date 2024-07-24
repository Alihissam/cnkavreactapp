import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cnkavLogo, dropDownIcon, arrowIcon, humburger } from "../../images";

import LoginModal from './LoginModal';
import ForgotModal from './ForgotModal';
import { FaArrowRight, FaArrowUp } from 'react-icons/fa';
import JoinUsModal from "./JoinUsModal";
import PricingModal from "./PricingModal";

export default function NavBar() {
  const [isModal, setModal] = useState(false);
  const [isCardVisible, setCardVisible] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoginModal, setisLoginModal] = useState(false);
  const [isForgotModal, setisForgotModal] = useState(false);

  const toggleModal = (type) => {
    if (type === 'open-login') {
      setisLoginModal(true);
      setModal(false);
    }

    if (type === 'open-signup') {
      setisLoginModal(false);
      setModal(true);
    }

    if (type === 'closed') {
      setisLoginModal(false);
      setModal(false);
      setisForgotModal(false);
    }

    if (type === 'open-forgot') {
      setisForgotModal(true);
      setModal(false);
      setisLoginModal(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const Sidebar = (
    <div
      className={`fixed sidebar right-0 h-full w-64 bg-black text-white transform ${isSidebarOpen ? " top-0  -translate-x-0 " : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 rounded-tl-xl`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-bold"></h2>
        <button onClick={closeSidebar} className="text-white">
          &times;
        </button>
      </div>
      <nav className="flex flex-col p-4 space-y-2">
        <Link
          to="/"
          className="hover:text-gray-400 rounded-lg bg-[#141414] p-2 flex items-center justify-between"
          onClick={closeSidebar}
        >
          Home<span className="ml-2"><FaArrowRight /></span>
        </Link>
        <Link
          to="/"
          className="hover:text-gray-400 bg-[#141414] rounded-lg p-2 flex items-center justify-between"
          onClick={() => {
            document
              .getElementById("exclusive-section")
              .scrollIntoView({ behavior: "smooth" });
            closeSidebar();
          }}
        >
          Featurs<span className="ml-2"><FaArrowRight /></span>
        </Link>
        <Link
          to="/"
          className="hover:text-gray-400 bg-[#141414] rounded-lg p-2 flex items-center justify-between"
          onClick={() => {
            document
              .getElementById("exclusive-section")
              .scrollIntoView({ behavior: "smooth" });
            closeSidebar();
          }}
        >
          Pricing<span className="ml-2"><FaArrowRight /></span>
        </Link>
        <Link
          to="/contact"
          className="hover:text-gray-400 rounded-lg bg-[#141414] p-2 flex items-center justify-between"
          onClick={closeSidebar}
        >
          Contact Us<span className="ml-2"><FaArrowRight /></span>
        </Link>
        <Link
          to="#"
          className="hover:text-gray-400 rounded-lg bg-[#141414] p-2 flex items-center justify-between"
          onClick={() => {
            toggleModal('open-login');
            closeSidebar();
          }}
        >
          Login<span className="ml-2"><FaArrowRight /></span>
        </Link>
        <Link
          to="#"
          className="hover:text-gray-400  rounded-lg bg-[#141414] p-2 flex items-center justify-between"
          onClick={() => {
            toggleModal('open-signup');
            closeSidebar();
          }}
        >
          Signup <span className="ml-2"><FaArrowRight /></span>
        </Link>
      </nav>
    </div>
  );

  return (
    <>
      <div className="fixed bg-black top-0 left-0 w-full shadow-md p-4 navbar">
        <div className="container  mx-auto flex  items-center justify-between">
          <div className="flex gap-10 items-center  md:w-auto justify-center md:justify-start">
            <Link to="/">
              <img src={cnkavLogo} alt="Logo" className="h-16 w-16" />
            </Link>
            <nav className="hidden text-lg md:text-md md:flex space-x-12 text-[17px]  items-baseline">
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
                      document
                        .getElementById("subscriptions")
                        .scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  Featurs
                </Link>

                <div className="absolute hidden group-hover:block w-[220px] bg-white text-black mt-[100px] leading-2 shadow-lg"></div>
              </div>

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
          <img
            onClick={toggleSidebar}
            className="block md:hidden w-8 cursor-pointer"
            src={humburger}
            alt="Menu"
          />

          <button
            onClick={() => setModal(!isModal)}
            className="hidden group font-bold cursor-pointer md:flex items-center border border-white lg:px-7 py-3 rounded-md text-white transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="text-white">Join Us</span>
            <FaArrowUp className="h-6 ml-2 transition-transform duration-300 ease-in-out transform hover:translate-x-1 hover:scale-110 group-hover:rotate-90 rotate-45" />
          </button>
        </div>
      </div>
      {Sidebar}
      <JoinUsModal isModal={isModal} toggleModal={toggleModal} />
      <LoginModal isModal={isLoginModal} toggleModal={toggleModal} />
      <ForgotModal isModal={isForgotModal} toggleModal={toggleModal} />

      {isCardVisible && <PricingModal setCardVisible={setCardVisible} />}
    </>
  );
}
