import React from "react";
import { googleLogo, facebookLogo, appleLogo, cnkavLogo } from "../../images";

export default function JoinUsModal({ isModal, setModal }) {
  return (
    <>
      {isModal && (
        <div className="fixed overflow-auto inset-0 flex items-center justify-center z-50 bg-transparent">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setModal(false)}
          ></div>
          <div className="relative  bg-black rounded-lg shadow-lg p-8 z-10 max-w-md w-full mx-4 md:mx-0">
            <div className="flex items-center justify-center mt-8 pt-40">
              <img src={cnkavLogo} alt="" className="h-20" />
            </div>
            <h2 className="text-white text-4xl font-bold py-3 ">
              Create A Personal Account
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-white text-sm mb-2"
                  htmlFor="username"
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white"
                  placeholder="Enter User Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white"
                  placeholder="At least 8 characters"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-sm mb-2"
                  htmlFor="confirmation-code"
                >
                  Confirmation Code
                </label>
                <input
                  type="text"
                  id="confirmation-code"
                  className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white"
                  placeholder="Enter To Join Code"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-4">
              <button
                className="w-full text-white py-3 rounded-lg font-bold flex items-center justify-center mb-2 transition"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid transparent",
                  borderImage: "linear-gradient(120deg, red, yellow) 1",
                }}
              >
                <img src={googleLogo} alt="Google" className="w-6 h-6 mr-2" />
                Sign up with Google
              </button>
              <button
                className="w-full text-white py-3 rounded-lg font-bold flex items-center justify-center mb-2 transition"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid transparent",
                  borderImage: "linear-gradient(120deg, red, yellow) 1",
                }}
              >
                <img
                  src={facebookLogo}
                  alt="Facebook"
                  className="w-6 h-6 mr-2"
                />
                Sign up with Facebook
              </button>
              <button
                className="w-full text-white py-3 rounded-lg font-bold flex items-center justify-center transition"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid transparent",
                  borderImage: "linear-gradient(120deg, red, yellow) 1",
                }}
              >
                <img src={appleLogo} alt="Apple" className="w-6 h-6 mr-2" />
                Sign up with Apple
              </button>
            </div>

            <div className="text-center">
              <button className="py-6 ">
                <p>
                  Don't you have an account?{" "}
                  <span className=" text-blue-700">Sign up</span>
                </p>
              </button>
              <button>
                <p>
                  Already Have An Account?{" "}
                  <a href="/login" className="underline text-blue-700">
                    Log in
                  </a>
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
