import React from "react";
import { arrowIcon } from "../../images";
import { Link } from "react-router-dom";

export default function ExclusiveRoomSection() {
  return (
    <section className="p-[1.5rem]" id="exclusive-room">
      <div className="md:py-30 py-40  p-5 mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-6xl font-black">Exclusive Rooms</h1>
        <h2 className="text-2xl font-bold">
          Experience Superior Communication
        </h2>
        <p className="text-xl leading-relaxed text-gray-200">

          Welcome to Exclusive Room - your gateway to an elite virtual
          experience. We have curated a perfect environment for<br/> intellectual
          exchanges in our exceptional chat rooms, guaranteeing tasteful
          discussions among a community of <br/>distinguished members.
        </p>

        <div className="mt-3 flex justify-center">
          <Link
            to="subscriptions"
            className="hidden md:flex items-center border-2 border-red-500 px-8 py-3 rounded-md text-white transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <span>Secure my Place</span>
            <img
              src={arrowIcon}
              className="bg-white rounded-full h-6 ml-2 transition-transform duration-300 ease-in-out transform hover:translate-x-1"
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
