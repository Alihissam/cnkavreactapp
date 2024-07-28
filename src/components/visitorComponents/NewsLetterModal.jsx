import React from 'react';
import {
  googleLogo,
  facebookLogo,
  appleLogo,
  cnkavLogo,
  signupbg,
} from '../../images';
import { helloHand } from '../../images';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'flowbite-react';

export default function Component({ isModal, toggleModal }) {
  const navigate = useNavigate();

  return (
    <div>
      <Modal show={isModal} onClose={() => toggleModal('closed')}>
        <div
          className="space-y-5  bg-black  p-8 rounded-md "

        >
          <div className="flex justify-end">
            <button
              onClick={() => toggleModal('closed')}
              className="text-white text-2xl font-bold"
            >
              &times;
            </button>
          </div>

          <div className="flex justify-center">
            <img src={cnkavLogo} alt="Logo" className="h-24 w-24" />
          </div>
          <form className="px-10">
            <div className="mb-4">
              <label
                className="block text-white text-sm mb-2"
                htmlFor="username"
              >
                News Letter Sign Up
              </label>
              <input
                type="text"
                id="email"
                className="w-full p-3 border border-gray-700 rounded-lg bg-white text-[#575757]"
                placeholder="Enter Email"
              />
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => navigate("/dashboard")}
                type="submit"
                className="w-full text-white py-3 rounded-lg font-bold flex items-center justify-center mb-2 transition"
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid transparent',
                  borderImage: 'linear-gradient(120deg, red, yellow) 1',
                }}
              >
                Sign Up
              </button>


            </div>
          </form>


          <div className='py-6'>
            <p className="mt-6 text-center text-sm text-white">
              By signing up, you agree to Cnkav <br />
              <a href="#" className="text-white underline">
                Terms and Conditions
              </a>
              .
            </p>
          </div>


        </div>
      </Modal>
    </div>
  );
}







// import { cnkavLogo } from "../../images";

// const NewsLetterModal = ({ setNewsLetterModal }) => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="relative bg-black  p-6 rounded-lg shadow-lg w-full max-w-md">
//         <button
//           onClick={() => setNewsLetterModal(false)}
//           className="absolute top-4 right-4 text-white text-3xl mt-10"
//         >
//           &times;
//         </button>
//         <div className="flex justify-center">
//           <img src={cnkavLogo} alt="cnkav logo" className="h-40 mt-32 mb-10" />
//         </div>
//         <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md">
//           <form className="space-y-4">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium mb-2"
//                 name="email"
//               >
//                 News Letter Sign Up
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg"
//                 placeholder="Enter Email"
//               />
//             </div>

//             <div className="pt-6">
//               <button
//                 type="submit"
//                 className="rounded-3xl w-full bg-black text-white py-3 px-4 font-bold"
//                 style={{
//                   border: "2px solid transparent",
//                   borderImage: "linear-gradient(120deg, red, yellow)",
//                   borderImageSlice: 1,
//                 }}
//               >
//                 Sign Up
//               </button>
//             </div>
//           </form>
//           <p className="mt-6 text-center text-sm text-white">
//             By signing up, you agree to Cnkav <br />
//             <a href="#" className="text-white underline">
//               Terms and Conditions
//             </a>
//             .
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsLetterModal;
