import React from "react";
import { Link } from "react-router-dom";
import { galleryImage } from "../../images";
import { FaArrowUp } from "react-icons/fa6";
export default function EngagnmentSection() {
  return (
    <div className="px-[1.5rem] mt-24 py-11">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[50%]">
          <div className="p-3">
            <h2 className="text-4xl font-black mt-4 mb-2">
              Engage and Innovate
            </h2>
            <h2 className="text-2xl mb-4 font-bold">
              Outsource and Accomplish
            </h2>
            <p className="text-lg leading-relaxed text-gray-200">
              The future of collaborative work and engaging community activities
              is here. Get <br />
              started today with Influewave, where the influence is not just
              about single success <br />
              but also shared growth and achievements. Choose the subscription
              that suits you <br />
              best and start your journey to unlimited opportunities.
            </p>
            <h2 className="text-4xl font-black mb-2 pt-6">
              Affiliate Marketing
            </h2>
            <h2 className="text-2xl mb-4 font-bold">Monetize Your Influence</h2>
            <p className="text-lg leading-relaxed text-gray-200">
              Expand your income sources with our integrated affiliate marketing
              system. Get <br />
              discounts, earn commissions, and monetize your influence, all
              within our platform.
              <br /> No previous experience in marketing? Not to worry, we
              provide all the necessary <br />
              tools and support to ensure your affiliate success.
            </p>
            <h2 className="text-4xl font-black mb-2 pt-6">
              eSports and Events
            </h2>
            <h2 className="text-2xl mb-4 font-bold">Step into the Spotlight</h2>
            <p className="text-lg leading-relaxed text-gray-200">
              Step into adrenaline-packed eSports events and competitions. Our
              well-curated
              <br /> community section provides access to various trends,
              challenges, tournaments, and
              <br /> even exclusive professional gaming guidance. You don’t just
              watch eSports; you live
              <br /> them with Influewave.
            </p>
            <div className="mt-3">
              <Link
                to="subscriptions"
                className="w-56 group  flex items-center border-2 border-red-500 px-6 py-3 rounded-md text-white transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <span className="font-bold">I am Ready to Join</span>
                <FaArrowUp className="h-6 ml-2 transition-transform duration-300 ease-in-out transform hover:translate-x-1   hover:scale-110 group-hover:rotate-90 rotate-45" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-center">
          <img
            src={galleryImage}
            alt=""
            className="w-[90%] h-[80%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
