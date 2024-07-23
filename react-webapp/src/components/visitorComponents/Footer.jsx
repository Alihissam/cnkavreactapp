import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  cnkavLogo,
  twitterImage,
  linkedinImage,
  facebookLogo,
} from "../../images";
import PricingModal from "./PricingModal";
import JoinUsModal from "./JoinUsModal";

export default function Footer() {
  const [isCardVisible, setCardVisible] = useState(false);
  const [isModal, setModal] = useState(false);
  return (
    <footer className="container md:px-10 py-6 mt-40">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img src={cnkavLogo} alt="Logo" className="h-12 md:h-16 md:w-16" />
          <p className="mt-3 px-4 text-gray-400">
            At CNKAV, we envision a world where anyone, regardless of their
            location, can tap into the potential of digital platforms to enrich
            their personal and professional experiences. As we continue to
            innovate, our commitment lies in creating digital landscapes where
            opportunities abound and growth is a shared journey.
          </p>
        </div>

        <div className="flex justify-end-1/3 gap-16 mr-24">
          <div className=" ">
            <h1 className="text-xl mb-4 font-bold">Product</h1>
            <div className="text-white flex flex-col">
              <Link
                to="subscriptions"
                className="hover:text-gray-400 hover:underline my-1"
              >
                Features
              </Link>
              <Link
                className="hover:text-gray-400 hover:underline  my-1"
                to="#"
                onClick={() => setCardVisible(true)}
              >
                Pricing
              </Link>
              <button
                onClick={() => setModal(!isModal)}
                className="hover:text-gray-400 hover:underline  my-1"
              >
                <a>Book a demo</a>
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-xl mb-4 font-bold">Company</h1>
            <div className="text-white flex flex-col">
              <Link
                to="aboutus"
                className="hover:text-gray-400 hover:underline my-1"
              >
                About us
              </Link>

              <Link
                to="/contact"
                className="hover:text-gray-400 hover:underline my-1"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-slate-800 w-full p-0 m-0"></div>

      <div className="flex justify-between gap-3 mt-12">
        <div className="flex justify-between gap-3 text-white">
          © 2024 Welcome. All right reserved.{" "}
          <Link
            to="/privacy-policy"
            className="hover:text-gray-400 hover:underline"
          >
            {" "}
            Privacy Policy
          </Link>{" "}
          <Link
            to="/terms-of-services"
            className="hover:text-gray-400 hover:underline"
          >
            {" "}
            Terms of Service
          </Link>
        </div>
        <div className="flex gap-4">
          <Link to="https://www.facebook.com" target="_blank">
            <img
              src={facebookLogo}
              alt="Facebook"
              className="h-6 w-6 transition-transform transform hover:scale-110 hover:rotate-6"
            />
          </Link>
          <Link to="https://www.twitter.com" target="_blank">
            <img
              src={twitterImage}
              alt="Twitter"
              className="h-6 w-6 transition-transform transform hover:scale-110 hover:rotate-6"
            />
          </Link>
          <Link to="https://www.linkedin.com" target="_blank">
            <img
              src={linkedinImage}
              alt="LinkedIn"
              className="h-6 w-6 transition-transform transform hover:scale-110 hover:rotate-6"
            />
          </Link>
        </div>
      </div>
      {isModal && <JoinUsModal isModal={isModal} setModal={setModal} />}
      {isCardVisible && <PricingModal setCardVisible={setCardVisible} />}
    </footer>
  );
}
