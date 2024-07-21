import React from 'react';

export default function ExclusiveRoomSection() {
  return (
    <section class="container mx-auto px-4">
      <div class="h-[100vh] pt-40 w-[80%] p-12 mx-auto text-center space-y-4">
        <h1 class="text-6xl font-black">Exclusive Rooms</h1>
        <h2 class="text-2xl font-bold">Experience Superior Communication</h2>
        <p class="text-lg">
          Welcome to Exclusive Room - your gateway to an elite virtual
          experience. We have curated a perfect environment for intellectual
          exchanges in our exceptional chat rooms, guaranteeing tasteful
          discussions among a community of distinguished members.
        </p>

        <div class="mt-3 flex justify-center">
          <button
            class="hidden md:flex items-center border-2 border-red-500 px-8 py-3 rounded-md text-white"
          >
            <span>Secure my Place</span>
            <img
              src="./images/arrow.png"
              class="bg-white rounded-full h-6 ml-2"
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
}
