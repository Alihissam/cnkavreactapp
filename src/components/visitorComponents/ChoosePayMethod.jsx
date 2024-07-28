import React from "react";
import {
  FaLock,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaPaypal,
} from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { cnkavLogo } from "../../images";

const ChoosePayMethod = () => {
  return (
    <div className="min-h-screen  bg-black text-white flex flex-col items-center justify-center">
      <div className="bg-black text-white border rounded-lg p-8 shadow-lg  mt-24">
        <div className="flex flex-col items-center">
          <IoMdLock className="text-red-500 text-4xl mb-8  border-2 border-red-500 rounded-full p-1" />

          <p className="text-sm text-center">STEP 3 OF 3</p>
          <h2 className="text-2xl  my-2 font-bold">Choose how to pay</h2>
          <p className="text-center mb-4">
            Your payment is encrypted and you can change how you pay at any
            time.
          </p>
          <p className="text-center font-bold mb-6">
            Secure for peace of mind. <br />
            Cancel easily online.
          </p>
          <div className="w-full flex justify-end">
            <p className="text-sm mb-4">
              End-to-end encrypted <FaLock className="inline text-yellow-500" />
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-between border p-4 rounded-lg">
            <span>Credit or Debit Card</span>
            <div className="flex space-x-2">
              <FaCcVisa className="text-blue-600" />
              <FaCcMastercard className="text-red-600" />
              <FaCcAmex className="text-blue-600" />
            </div>
          </button>

          <button className="w-full flex items-center justify-start border p-4 rounded-lg">
            <span>iDEAL (Direct Debit)</span>
            <FaCcMastercard className="text-red-400 text-xl ml-4 border" />
          </button>

          <button className="w-full flex items-center    justify-start border p-4 rounded-lg">
            <span>PayPal</span>
            <FaPaypal className="text-blue-600 text-xl ml-4 border" />
          </button>

          <button className="w-full flex items-center justify-start border p-4 rounded-lg">
            <span>Gift Code</span>
            <span className="">
              <img src={cnkavLogo} alt="" className="h-6    ml-6" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoosePayMethod;
