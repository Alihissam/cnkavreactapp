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
                Password Reset Request
              </label>
              <input
                type="text"
                id="email"
                className="w-full p-3 border border-gray-700 rounded bg-transparent text-white"
                placeholder="Enter Email"
              />
            </div>

            <div className="flex justify-center">
              <button
                className="w-full text-white py-3 rounded-lg font-bold flex items-center justify-center mb-2 transition"
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid transparent',
                  borderImage: 'linear-gradient(120deg, red, yellow) 1',
                }}
              >
                Request New Password 
              </button>


            </div>
          </form>

          
         <div className='py-6'>
         <p className="text-center text-white text-sm ">
            By signing up, you agree to Cnkav's{' '},
          </p>
          <p className="text-center text-white text-sm">
          <a href="/terms" className="underline ">
              Terms and Conditions
            </a>.
          </p>
          </div>
          

        </div>
      </Modal>
    </div>
  );
}
