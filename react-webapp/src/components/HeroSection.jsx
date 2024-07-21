import React from 'react'
import {FiverStars,Avatargroup, nextIcons,arrowIcon} from '../images'
export default function HeroSection() {
  return (
    <section class="pt-64 flex flex-col-reverse md:flex-row px-8 relative">
    <div class="absolute inset-0 grid grid-cols-10 gap-6 mt-32 z-0">
      <div class="bg-gray-800 opacity-40"></div>
      <div class="bg-gray-800 opacity-40"></div>
      <div class="bg-gray-800 opacity-40"></div>
      <div class="bg-gray-800 opacity-40"></div>
      <div class="bg-gray-800 opacity-40"></div>
      <div class="bg-gray-800 opacity-40"></div>
      <div class="bg-gray-800 opacity-40"></div>
      <div class="bg-gray-800 opacity-40"></div>
      <div class="bg-gray-800 opacity-40"></div>
      <div class="bg-gray-800 opacity-40"></div>
    </div>
    <div class="container mx-auto px-4 py-20 md:w-1/2 z-20">
      <h1 class="text-7xl font-bold mb-4">Different Social</h1>
      <h2 class="text-xl mb-6">
        Quest, Connect & Earn:
        <span class="font-semibold text-gray-400">An Exclusive Club</span>
      </h2>
      <p class="text-lg mb-6">
        Welcome to a place where you don't just connect, you form alliances -
        meld creativity and skills, and produce something outstanding. From
        hobbyists seeking advice to professionals exchanging expertise; you're
        one chat away from unlocking new possibilities.
      </p>
      <div class="flex items-center mb-6 mt-12">
        <div class="flex items-center">
          <img src={Avatargroup} alt="Member 1" class="" />
          <div class="ml-3 flex items-center">
            <div>
              <p>Amazing Members</p>
              <img src={FiverStars} alt="" />
            </div>

            <img src={nextIcons} class="h-4 ml-4" alt="" />
          </div>
        </div>
      </div>
      <div class="mt-12">
        <button
          class="hidden md:flex items-center border border-white px-8 py-2 rounded-md text-white"
        >
          <span>Secure my Spot</span>
          <img
            src={arrowIcon}
            class="bg-white rounded-full h-6 ml-2"
            alt=""
          />
        </button>
      </div>
    </div>
    <div class="z-20">
      <div class="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
        <img
          src="https://cnkav.com/wp-content/uploads/2024/05/Frame-1171275608-1.png"
          alt="Image 1"
          class="w-[218px] h-[214px] object-cover rounded-lg mb-4"
        />

        <div class="z-10">
          <img
            src="https://cnkav.com/wp-content/uploads/2024/05/Frame-1171275610.png"
            alt="Image 2"
            class="w-[218px] h-[214px] object-cover rounded-lg mb-4"
          />
          <h3 class="text-4xl font-bold text-gray-400">Amazing</h3>
          <p class="text-gray-400">Network of Exclusive Club</p>
        </div>
      </div>
      <div class="bg-black p-4 rounded-lg mt-2">
        <img
          src="https://cnkav.com/wp-content/uploads/2024/05/pexels-yankrukov-9072394-1.png"
          alt="Image 3"
          class="w-full h-40 object-cover rounded-lg mb-4"
        />
      </div>
    </div>
  </section>

  )
}
