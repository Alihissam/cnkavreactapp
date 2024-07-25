import React from "react";
import {
  googleLogo,
  facebookLogo,
  appleLogo,
  cnkavLogo,
  signupbg,
} from "../../images";
import { useNavigate } from "react-router-dom";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaApple } from "react-icons/fa";

// export default function JoinUsModal({ isModal, setModal }) {

//   const navigate = useNavigate();
//   return (
//     <>
//       {isModal && (
//         <div className="absolute h-[90vh] overflow-auto inset-0 flex items-center justify-center joinModal bg-transparent">
//           <div
//             className="  bg-black opacity-50"
//             onClick={() => setModal(false)}
//           ></div>
//           {/* <div className="relative bg-black rounded-lg shadow-lg p-8 z-10 max-w-md w-full mx-4 md:mx-0" style={{ backgroundImage: `url(${signupbg})`, backgroundSize: 'cover' }}>
//             */}
//              <div className="relative bg-black rounded-lg shadow-lg p-8 z-10 max-w-xl w-full mx-4 md:mx-0"

//           style={{
//             backgroundImage: `url(${signupbg})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             height:'100%',
//             opacity: 0.5
//           }}
//           >

//             <div className="flex items-center justify-center ">
//               <img src={cnkavLogo} alt="" className="h-20" />
//             </div>
//             <h2 className="text-white text-4xl font-bold py-3 ">
//               Create A Personal Account
//             </h2>
//             <form>
//               <div className="mb-4">
//                 <label
//                   className="block text-white text-sm mb-2"
//                   htmlFor="username"
//                 >
//                   User Name
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white"
//                   placeholder="Enter User Name"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   className="block text-white text-sm mb-2"
//                   htmlFor="password"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white"
//                   placeholder="At least 8 characters"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label
//                   className="block text-white text-sm mb-2"
//                   htmlFor="confirmation-code"
//                 >
//                   Confirmation Code
//                 </label>
//                 <input
//                   type="text"
//                   id="confirmation-code"
//                   className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white"
//                   placeholder="Enter To Join Code"
//                 />
//               </div>
//               <button
//                 onClick={() =>
//                   navigate("/dashboard")
//                 }
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
//               >
//                 Sign Up
//               </button>
//             </form>

//             <div className="mt-4">
//               <button
//                 className="w-full text-white py-3 rounded-lg font-bold flex items-center justify-center mb-2 transition"
//                 style={{
//                   backgroundColor: "transparent",
//                   border: "2px solid transparent",
//                   borderImage: "linear-gradient(120deg, red, yellow) 1",
//                 }}
//               >
//                 <img src={googleLogo} alt="Google" className="w-6 h-6 mr-2" />
//                 Sign up with Google
//               </button>
//               <button
//                 className="w-full text-white py-3 rounded-lg font-bold flex items-center justify-center mb-2 transition"
//                 style={{
//                   backgroundColor: "transparent",
//                   border: "2px solid transparent",
//                   borderImage: "linear-gradient(120deg, red, yellow) 1",
//                 }}
//               >
//                 <img
//                   src={facebookLogo}
//                   alt="Facebook"
//                   className="w-6 h-6 mr-2"
//                 />
//                 Sign up with Facebook
//               </button>
//               <button
//                 className="w-full text-white py-3 rounded-lg font-bold flex items-center justify-center transition"
//                 style={{
//                   backgroundColor: "transparent",
//                   border: "2px solid transparent",
//                   borderImage: "linear-gradient(120deg, red, yellow) 1",
//                 }}
//               >
//                 <img src={appleLogo} alt="Apple" className="w-6 h-6 mr-2" />
//                 Sign up with Apple
//               </button>
//             </div>

//             <div className="text-center">
//               <button className="py-6 ">
//                 <p>
//                   Don't you have an account?{" "}
//                   <span className=" text-blue-700">Sign up</span>
//                 </p>
//               </button>
//               <button>
//                 <p>
//                   Already Have An Account?{" "}
//                   <a href="/login" className="underline text-blue-700">
//                     Log in
//                   </a>
//                 </p>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

export default function Component({ isModal, toggleModal }) {
  const navigate = useNavigate();

  return (
    <div>
      <Modal show={isModal} onClose={() => toggleModal("closed")}>
        <div
          className="space-y-6 h-[90vh]  p-8 rounded-md "
          style={{
            backgroundImage: `url(${signupbg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Black overlay with 50% opacity
            backgroundBlendMode: "overlay",
            overflowY: "scroll",
          }}
        >
          <div className="flex justify-end">
            <button
              onClick={() => toggleModal("closed")}
              className="text-white text-2xl font-bold"
            >
              &times;
            </button>
          </div>
          <h2 className="px-10 text-white text-2xl md:text-5xl font-bold py-3 ">
            Create A Personal Account
          </h2>

          <form className="px-10">
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
                className="w-full p-3 border border-gray-700 rounded bg-transparent text-white"
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
                className="w-full p-3 border border-gray-700 rounded bg-transparent text-white"
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
                className="w-full p-3 border border-gray-700 rounded bg-transparent text-white"
                placeholder="Enter To Join Code"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full text-white py-3 rounded-lg font-bold flex items-center justify-center mb-2 transition"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid transparent",
                  borderImage: "linear-gradient(120deg, red, yellow) 1",
                }}
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="mt-4 flex flex-col items-center">
            <button
              className="w-[60%] text-white py-3 rounded-lg font-bold flex items-center justify-center mb-2 transition"
              style={{
                backgroundColor: "transparent",
                border: "2px solid transparent",
                // borderImage: 'linear-gradient(120deg, red, yellow) 1',
              }}
            >
              <img src={googleLogo} alt="Google" className="w-6 h-6 mr-2" />
              Sign up with Google
            </button>
            {/* <button
              className="w-[60%] text-white py-3 rounded-lg font-bold flex items-center justify-center mb-2 transition"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid transparent',
                borderImage: 'linear-gradient(120deg, red, yellow) 1',
              }}
            >
              <img src={facebookLogo} alt="Facebook" className="w-6 h-6 mr-2" />
              Sign up with Facebook
            </button> */}
            <button
              className="w-[60%] text-white py-3 rounded-lg font-bold flex items-center justify-center transition"
              // style={{
              //   backgroundColor: 'transparent',
              //   border: '2px solid transparent',
              //   borderImage: 'linear-gradient(120deg, red, yellow) 1',
              // }}
            >
              <FaApple className="w-8 h-8 mr-3" />
              {/* <img src={appleLogo} alt="Apple" className="w-6 h-6 mr-2" /> */}
              Sign up with Apple
            </button>

            <button onClick={() => toggleModal("open-login")}>
              <p>
                Already Have An Account?{" "}
                <span className="underline text-blue-700 cursor-pointer">
                  Log in
                </span>
              </p>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
