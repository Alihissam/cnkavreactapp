import React from 'react';

import FlexibleSection from '../components/FlexibleSection';
import InfluewaveSection from '../components/InfluewaveSection';
import {fram1Image,monyImage,fram2Image} from '../images'
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section class="pt-64 flex flex-col-reverse md:flex-row px-8">
        <div class="container mx-auto px-4 py-20 md:w-1/2">
          <h1 class="text-7xl font-bold mb-4">Different Social</h1>
          <h2 class="text-xl mb-6">
            Quest, Connect & Earn:
            <span class="font-semibold text-gray-400">An Exclusive Club</span>
          </h2>
          <p class="text-lg mb-6">
            Welcome to a place where you don't just connect, you form alliances
            - meld creativity and skills, and produce something outstanding.
            From hobbyists seeking advice to professionals exchanging expertise;
            you're one chat away from unlocking new possibilities.
          </p>
          <div class="flex items-center mb-6">
            <div class="flex">
              <img
                src="https://cnkav.com/wp-content/uploads/2024/05/Avatar-group-copy.png"
                alt="Member 1"
                class="w-12 h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://cnkav.com/wp-content/uploads/2024/05/Avatar-group-copy.png"
                alt="Member 2"
                class="w-12 h-12 rounded-full border-2 border-white z-999"
              />
              <img
                src="https://cnkav.com/wp-content/uploads/2024/05/Avatar-group-copy.png"
                alt="Member 3"
                class="w-12 h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://cnkav.com/wp-content/uploads/2024/05/Avatar-group-copy.png"
                alt="Member 4"
                class="w-12 h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://cnkav.com/wp-content/uploads/2024/05/Avatar-group-copy.png"
                alt="Member 5"
                class="w-12 h-12 rounded-full border-2 border-white"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <img
              src={fram1Image}
              alt="Image 1"
              class="w-[218px] h-[280px] object-cover rounded-lg mb-4"
            />

            <div class="">
              <img
                src={monyImage}
                alt="Image 2"
                class="w-[218px] h-[214px] object-cover rounded-lg mb-4"
              />
              <h3 class="text-4xl font-bold text-gray-400">Amazing</h3>
              <p class="text-gray-400">Network of Exclusive Club</p>
            </div>
          </div>
          <div class="bg-black p-4 rounded-lg mt-2">
            <img
              src={fram2Image}
              alt="Image 3"
              class="w-full h-40 object-cover rounded-lg mb-4"
            />
          </div>
        </div>
      </section>

      <InfluewaveSection />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 mb-6">
        <div>
          <img src="https://cnkav.com/wp-content/uploads/2024/05/Frame-1171275607-2.png" />
        </div>

        <div class="p-9">
          <h1 class="text-6xl font-bold">The Quest System</h1>
          <h2>Outsource and Accomplish</h2>
          <p>
            Welcome to our innovative quest system, combining the flexibility of
            on-demand services with the assurance of video call verification.
          </p>
          <ul>
            <li>Post your tasks and connect.</li>
            <li>
              Our capable community members who are more than eager to lend a
              hand.
            </li>
            <li>
              No task is too big or small, you can discuss and navigate them
              virtually before any work commences.
            </li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 mt-12">
        <div class="p-9">
          <h1 class="text-6xl font-bold">Video Chat</h1>
          <h2>Transformative Task Discussions</h2>
          <p>
            Say goodbye to endless back-and-forth texts and hello to seamless
            video chat discussions. Detail your needs, align your goals, and
            orchestrate your tasks through direct online conversations. Through
            video chat, you not only get to specify your requests but also
            evaluate your service provider’s suitability to the task.
          </p>
        </div>

        <div>
          <img src="https://cnkav.com/wp-content/uploads/2024/05/Frame-1171275607.png" />
        </div>
      </div>

      <FlexibleSection />

  
    </div>
  );
}
