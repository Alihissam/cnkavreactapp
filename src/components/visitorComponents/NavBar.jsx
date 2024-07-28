import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cnkavLogo, dropDownIcon, arrowIcon, humburger } from "../../images";

import LoginModal from './LoginModal';
import ForgotModal from './ForgotModal';
import { FaArrowRight, FaArrowUp } from 'react-icons/fa';
import JoinUsModal from "./JoinUsModal";
import PricingModal from "./PricingModal";
import ContactModal from "./ContactModal";
import ContactModal2 from "./ContactModal2";
import ContactModal3 from "./ContactModal3";
import ContactModal4 from "./ContactModal4";
import ContactModal5 from "./ContactModal5";
import ContactModal6 from "./ContactModal6";
import ContactModal7 from "./ContactModal7";
import ContactModal8 from "./ContactModal8";





export default function NavBar() {
  const [isModal, setModal] = useState(false);
  const [isCardVisible, setCardVisible] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoginModal, setisLoginModal] = useState(false);
  const [isForgotModal, setisForgotModal] = useState(false);
  const [isContactModal, setisContactModal] = useState(false);
  const [isContactModal2, setisContactModal2] = useState(false);
  const [isContactModal3, setisContactModal3] = useState(false);
  const [isContactModal4, setisContactModal4] = useState(false);
  const [isContactModal5, setisContactModal5] = useState(false);
  const [isContactModal6, setisContactModal6] = useState(false);
  const [isContactModal7, setisContactModal7] = useState(false);
  const [isContactModal8, setisContactModal8] = useState(false);





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
      setisContactModal(false);
      setisContactModal2(false);
      setisContactModal3(false);
      setisContactModal4(false);
      setisContactModal5(false);
      setisContactModal6(false);
      setisContactModal7(false);
      setisContactModal8(false);
    }

    if (type === 'open-forgot') {
      setisForgotModal(true);
      setModal(false);
      setisLoginModal(false);
    }

    // 
    if (type === 'contact-modal') {
      setisContactModal(true);
      setModal(false);
      // setisLoginModal(false);
    }
    if (type === 'contact-modal2') {
      setisContactModal(false);
      setisContactModal2(true);
      setModal(false);
      // setisLoginModal(false);
    }
    if (type === 'contact-modal3') {
      setisContactModal2(false);
      setisContactModal3(true);
      setModal(false);
      // setisLoginModal(false);
    }
    if (type === 'contact-modal4') {
      setisContactModal3(false);
      setisContactModal4(true);
      setModal(false);
      // setisLoginModal(false);
    }
    if (type === 'contact-modal5') {
      setisContactModal4(false);
      setisContactModal5(true);
      setModal(false);
      // setisLoginModal(false);
    }
    if (type === 'contact-modal6') {
      setisContactModal5(false);
      setisContactModal6(true);
      setModal(false);
      // setisLoginModal(false);
    }
    if (type === 'contact-modal7') {
      setisContactModal6(false);
      setisContactModal7(true);
      setModal(false);
      // setisLoginModal(false);
    }
    if (type === 'contact-modal8') {
      setisContactModal7(false);
      setisContactModal8(true);
      setModal(false);
      // setisLoginModal(false);
    }


  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  // mobile menu sidebar //

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
          to="#"
          className="hover:text-gray-400 rounded-lg bg-[#141414] p-2 flex items-center justify-between"
          onClick={() => {
            toggleModal('contact-modal');
            closeSidebar();
          }}
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


  // web and tablet menu //

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
                to="#"
                // to="contact"
                onClick={() => {
                  toggleModal('contact-modal');
                  // closeSidebar();
                }}

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
      <ContactModal isModal={isContactModal} toggleModal={toggleModal} />
      <ContactModal2 isModal={isContactModal2} toggleModal={toggleModal} />
      <ContactModal3 isModal={isContactModal3} toggleModal={toggleModal} />
      <ContactModal4 isModal={isContactModal4} toggleModal={toggleModal} />
      <ContactModal5 isModal={isContactModal5} toggleModal={toggleModal} />
      <ContactModal6 isModal={isContactModal6} toggleModal={toggleModal} />
      <ContactModal7 isModal={isContactModal7} toggleModal={toggleModal} />
      <ContactModal8 isModal={isContactModal8} toggleModal={toggleModal} />



      {/*  */}
      {isCardVisible && <PricingModal setCardVisible={setCardVisible} />}
    </>
  );
}
