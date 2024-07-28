import React from 'react';
import { Link } from 'react-router-dom';
import {
  googleLogo,
  facebookLogo,
  appleLogo,
  cnkavLogo,
  loginbg,
} from '../../images';
import { helloHand } from '../../images';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'flowbite-react';
import { FaAppStore, FaApple } from 'react-icons/fa';
import { HRText } from "flowbite-react";


export default function Component({ isModal, toggleModal }) {
  const navigate = useNavigate();

  return (
    <div>
      <Modal show={isModal} onClose={() => toggleModal('closed')}>
        <div
          // className="space-y-6 h-[90vh]  p-8 rounded-md "
          className="space-y-2 h-[100%] w-full px-4 md:px-8  pt-3 pb-8 rounded-md "
          style={{
            backgroundImage: `url(${loginbg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black overlay with 50% opacity
            backgroundColor: 'rgba(0, 0, 0, 0.89)', // Black overlay with 50% opacity
            backgroundBlendMode: "overlay",
            // overflowY: 'scroll',
          }}
        >
          <div className=" flex items-start  justify-between">

            <div className=" mb-[20px] md:px-10 text-white text-2xl md:text-[46px]  font-bold flex items-center">
              Welcome Back{' '}
              <img src={helloHand} alt="Hello Hand" className="h-10 ml-2" />
            </div>

            <div className="flex">
              <button
                onClick={() => toggleModal('closed')}
                className="text-white text-2xl font-bold"
              >
                &times;
              </button>
            </div>
          </div>

          <div className="space-y-6 hidden  md:block px-10 text-[12px] font-normal">
            <p className='pb-2'>Today is a new day. It's your day. You shape it.
              Sign in to start managing your projects.</p>
          </div>


          <form className="space-y-7  md:px-10">
            <div className="mb-4 ">
              <label
                className="block text-white text-sm mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-3 border border-gray-700 rounded bg-transparent text-white"
                placeholder="Example@email.com"
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
            <div className="mb-4 flex justify-end">
              <Link
                to='#/forgot/password'
              >
                <button
                  onClick={() => toggleModal('open-forgot')}
                  className="text-blue-500 hover:underline"
                >
                  Forgot password?
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full text-white py-3 rounded-lg font-bold flex items-center justify-center  transition"
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid transparent',
                  borderImage: 'linear-gradient(120deg, red, yellow) 1',
                }}
              >
                Sign In
              </button>
            </div>
          </form>

          <div className=" flex items-center md:w-[70%] w-[85%] mx-auto">

            <div className="px-8 text-[#CFDFE2]" style={{ flex: 1, height: ".5px", backgroundColor: "white" }}></div>
            <p className='text-[#CFDFE2] px-4'>or</p>
            <div className="px-8 text-[#CFDFE2]" style={{ flex: 1, height: ".5px", backgroundColor: "white" }}></div>
          </div>




          <div className=" mt-4 flex flex-col items-center ">
            <button
              className="w-[60%] text-white py-3 rounded-lg font-bold flex items-center justify-center mb-2 transition"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid transparent',
              }}
            >
              <img src={googleLogo} alt="Google" className="w-6 h-6 mr-2" />
              <p className='text-[13.83px] font-normal mt-[2px]'>
                Sign up with Google
              </p>
            </button>
            <button className="w-[60%] text-white py-3 rounded-lg font-bold flex items-center justify-center transition">

              <FaApple className="w-8 h-8 mr-3" />
              <p className='text-[13.83px] font-normal mt-[6px]'>
                Sign up with Apple
              </p>

            </button>
            <Link
              to='#/signup'
              onClick={() => toggleModal('open-signup')}
            >
              <button
                className="py-2 ">
                <p>
                  Don't you have an account?{' '}
                  <span
                    className="text-blue-700 cursor-pointer"
                    onClick={() => to}
                  >
                    Sign up
                  </span>
                </p>
              </button>
            </Link>
          </div>
        </div>
      </Modal >
    </div >
  );
}
