import React, { useState } from "react";
import AffiliateProductModal from "./AffiliateProductModal";
import AffiliMarketLinkModal from "./AffiliMarketLinkModal";

import { waveInflue, waveCnkav, waveER } from "../../images";

const AffiliatedTools = () => {
  const [isAffiliateProductModal, setAffiliateProductModal] = useState(false);
  const [isAffiliMarketLinkModal, setAffiliMarketLinkModal] = useState(false);

  return (
    <div className="min-h-screen py-2  bg-black ">
      <div className="flex flex-col justify-center items-center mt-32  mx-[20%]">
        <form className="space-y-4 py-5 w-3/4">
          <div>
            <select
              id="selectOptions"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="" disabled selected>
                Select Options
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div>
            <select
              id="selectProducts"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="" disabled selected>
                Select Products
              </option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>
            </select>
          </div>
          <div>
            <button
              type="button"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm text-left rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onClick={() => setAffiliateProductModal(!isAffiliateProductModal)}
            >
              Request New Affiliate Product
            </button>
          </div>

          <div>
            <button
              type="button"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm text-left rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onClick={() => setAffiliMarketLinkModal(!isAffiliMarketLinkModal)}
            >
              Select Affiliate Marketing Links
            </button>
          </div>

          <div>
            <select
              id="affiliateLinks"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="" disabled selected>
                Affiliate marketing links Option (Edit/Delete)
              </option>
              <option value="edit">Edit</option>
              <option value="delete">Delete</option>
            </select>
          </div>
        </form>

        <div className="w-full md:w-[30%] p-5 mb-3">
          <img src={waveCnkav} alt="" className="" />

          <div className="p-2">
            <p className="text-xl">Cnkav Subscription</p>
            <p>€199.99/ month</p>
          </div>
        </div>

        <div className="w-full md:w-[30%] p-5 mb-3">
          <img src={waveER} alt="" className="w-full" />

          <div className="p-2">
            <p className="text-xl">Exclusive Room Subscription</p>
            <p>€499.99/ month</p>
          </div>
        </div>

        <div className="w-full md:w-[30%] p-5 mb-3">
          <img src={waveInflue} alt="" className="w-full" />

          <div className="p-2">
            <p className="text-xl">Influwave Subscription</p>
            <p>49.99/ month</p>
          </div>
        </div>
        {/* <img src={waveInflue} alt="" className="w-3/5 py-5" /> */}

        <button className="bg-white text-black py-3 w-4/6 mt-12 rounded-xl">
          Load More
        </button>
      </div>
      {isAffiliateProductModal && (
        <AffiliateProductModal
          setAffiliateProductModal={setAffiliateProductModal}
        />
      )}
      {isAffiliMarketLinkModal && (
        <AffiliMarketLinkModal
          setAffiliMarketLinkModal={setAffiliMarketLinkModal}
        />
      )}
    </div>
  );
};

export default AffiliatedTools;
