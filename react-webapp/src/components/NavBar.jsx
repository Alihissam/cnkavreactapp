import React, { useState } from 'react';
import {arrowImage, drop, LogoImage} from '../images';
import Modal from './Modal';

export default function NavBar() {
  const [isModal,setModal] =useState(false)


  return (
    <>
      <div class="fixed w-full z-10 shadow-md px-10 py-8">
        <div class="flex items-center justify-between">
          <div class="flex gap-12 items-center">
            <img
              src={LogoImage}
              alt="Logo"
              class="h-20"
            />
            <nav
              class="hidden md:flex space-x-12 text-[17px] ml-20 items-baseline"
            >
              <a class="text-white font-bold" href="#">Home</a>
              <div class="relative group flex items-center">
                <a
                  class="hover:text-white text-gray-400"
                  href="#"
                  id="influewave-link"
                >Influewave</a>
                <img
                  src={drop}
                  class="h-6 bg-white rounded-full ml-2"
                  alt="Dropdown Icon"
                />
              </div>
              <a class="hover:text-white text-gray-400" href="#"
              >Exclusive Room</a>
              <a class="hover:text-white text-gray-400" href="#">Pricing</a>
              <a class="hover:text-white text-gray-400" href="#">Contact Us</a>
            </nav>
          </div>
          <button
          onClick={()=>setModal(!isModal)}
            class="hidden cursor-pointer md:flex items-center border border-white px-8 py-2 rounded-md text-white"
          >
            <span>Join Us</span>
            <img
              src={arrowImage}
              class="bg-white rounded-full h-6 ml-2"
              alt=""
            />
          </button>
        </div>
      </div>
  {isModal && <Modal isModal={isModal} setModal={setModal} />}
    </>
    
  );
}
