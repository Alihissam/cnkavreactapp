import React from "react";
import { greenCheck, price1Image, price2Image } from "../../images";
import { Link } from "react-router-dom";

export default function PricingSection() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#141414] p-4 rounded-xl shadow-lg">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold mb-4 p-2">Influewave</h2>
            <button className="border border-green-500 text-green-500 rounded-lg p-2 outline-none m-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
              most popular
            </button>
          </div>
          <div className="flex pt-10 justify-center items-center m-4 flex-col">
            <img
              src={price1Image}
              alt="Shoes"
              className="h-20 object-cover mb-4"
            />
            <h2 className="text-xl font-bold m-4 text-gray-400">
              <span className="text-white text-4xl">€49.99</span>  <span  className="text-[#858585]">/month</span>
            </h2>
            <p  className="text-[#858585]">Suitable for Individual looking to foster growth and income.</p>

            <Link
              to="subscriptions"
              className="w-full m-4 text-center text-white py-3 px-2 rounded-lg hover:bg-white hover:text-black border border-white text-xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setCardVisible(false)}
            >
              Subscribe
            </Link>
          </div>
          <div className="my-4 border-t border-gray-300"></div>
          <h2 className="text-lg font-semibold mb-2">Plan Features</h2>
          <ul className="list-none space-y-4 opacity-50">
            <li className="flex items-center space-x-2">
              <img
                src={greenCheck}
                className="rounded-full h-4"
                alt="Checkmark"
              />
              <span className="text-[#858585]">Full access to our vibrant community</span>
            </li>
            <li className="flex items-baseline space-x-2">
              <img
                src={greenCheck}
                className="rounded-full h-4"
                alt="Checkmark"
              />
              <span  className="text-[#858585]"> Get invitations to exciting community events. </span>
            </li>
            <li className="flex items-baseline space-x-2">
              <img
                src={greenCheck}
                className="rounded-full h-4"
                alt="Checkmark"
              />
              <span  className="text-[#858585]">
                Ability to request any type of task using our quest feature.
              </span>
            </li>
            <li className="flex items-baseline space-x-2">
              <img
                src={greenCheck}
                className="rounded-full h-4"
                alt="Checkmark"
              />
              <span  className="text-[#858585]">
                Quests Board: View all available quests for free and make
                informed decisions before requesting a task.
              </span>
            </li>
            <li className="flex items-baseline space-x-2">
              <img
                src={greenCheck}
                className="rounded-full h-4"
                alt="Checkmark"
              />
              <span  className="text-[#858585]">
                Money-back guarantee: Enjoy the peace of mind with our 7-day,
                no-questions-asked refund policy on your first purchase.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-[#141414] p-4 rounded-xl shadow-lg">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold mb-4 p-8">CNKAV</h2>
          </div>
          <div className="flex justify-center items-center m-4 flex-col">
            <img
              src={price2Image}
              alt="Shoes"
              className="h-20 object-cover mb-4"
            />
            <h2 className="text-xl font-bold m-4 text-gray-400">
              <span className="text-white text-4xl">€199.99</span> <span  className="text-[#858585]">/month</span>
            </h2>
            <p  className="text-[#858585]">Suitable for Individual / Business looking to scale up.</p>
            <Link
              to="subscriptions"
              className="w-full m-4 text-center text-white py-3 px-2 rounded-lg hover:bg-white hover:text-black border border-white text-xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setCardVisible(false)}
            >
              Subscribe
            </Link>
          </div>
          <div className="my-4 border-t border-gray-300"></div>
          <h2 className="text-lg font-semibold mb-2">Plan Features</h2>
          <ul className="list-none space-y-4 opacity-50">
            <li className="flex items-baseline space-x-2">
              <img
                src={greenCheck}
                className="rounded-full h-4"
                alt="Checkmark"
              />
              <span  className="text-[#858585]">
                All the benefits of Influewave Subscription: Access to
                community, events, quests, affiliate marketing and more.
              </span>
            </li>
            <li className="flex items-baseline space-x-2">
              <img
                src={greenCheck}
                className="rounded-full h-4"
                alt="Checkmark"
              />
              <span  className="text-[#858585]">
                Expertise at your fingertips: Access to resources and community
                help when undertaking a quest.
              </span>
            </li>
            <li className="flex items-baseline space-x-2">
              <img
                src={greenCheck}
                className="rounded-full h-4"
                alt="Checkmark"
              />
              <span  className="text-[#858585]">
                Task taker advantage: Accepting and managing tasks becomes
                easier with specific dashboard.
              </span>
            </li>
            <li className="flex items-baseline space-x-2">
              <img
                src={greenCheck}
                className="rounded-full h-4"
                alt="Checkmark"
              />
              <span  className="text-[#858585]">
                Quests Board: View all available quests for free and make
                informed decisions before requesting a task.
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-[#141414] p-4 rounded-xl shadow-lg">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold mb-4 p-8">Exclusive Room</h2>
          </div>
          <div className="flex justify-center items-center m-4 flex-col">
            <img
              src={price1Image}
              alt="Shoes"
              className="h-20 object-cover mb-4"
            />
            <h2 className="text-xl font-bold m-4 text-gray-400">
              <span className="text-white text-4xl">€499.99</span>  <span  className="text-[#858585]">/month</span>
            </h2>
            <p  className="text-[#858585]">
              Suitable for premium members looking to build a valuable network.
            </p>
            <Link
              to="subscriptions"
              className="w-full m-4 text-center text-white py-3 px-2 rounded-lg hover:bg-white hover:text-black border border-white text-xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setCardVisible(false)}
            >
              Subscribe
            </Link>
          </div>
          <div className="my-4 border-t border-gray-300"></div>
          <h2 className="text-lg font-semibold mb-2">Plan Features</h2>
          <ul className="list-none space-y-4 opacity-50">
            <li className="flex items-baseline space-x-2">
              <img
                src={greenCheck}
                className="rounded-full h-4"
                alt="Checkmark"
              />
              <span  className="text-[#858585]">All the benefits of Cnkav Subscription.</span>
            </li>
            <li className="flex items-baseline space-x-2">
              <img
                src={greenCheck}
                className="rounded-full h-4"
                alt="Checkmark"
              />
              <span  className="text-[#858585]">
                Member's Only Chat: Engage with a select group of members in a
                private chat room, ideal for private consultation and
                collaboration.
              </span>
            </li>
            <li className="flex items-baseline space-x-2">
              <img
                src={greenCheck}
                className="rounded-full h-4"
                alt="Checkmark"
              />
              <span  className="text-[#858585]">
                Exclusive Events: Get invited to our exclusive, once-a-year
                events, giving you unparalleled access to network with elite
                community members.(€249.99)
              </span>
            </li>
            <li className="flex items-baseline space-x-2">
              <img
                src={greenCheck}
                className="rounded-full h-4"
                alt="Checkmark"
              />
              <span  className="text-[#858585]">
                Includes all benefits like other business network and even
                more...
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
