import React from 'react'
import {checkImage,questImage} from '../images'
export default function QuestSection() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 mb-6">
    <div class="">
      <img
        src={questImage}
      />
    </div>

    <div class="p-5 z-20">
      <h1 class="text-6xl font-black mb-4">The Quest System</h1>
      <h2 class="text-2xl mb-4 font-bold">Outsource and Accomplish</h2>
      <p class="mb-4 leading-loose">
        Welcome to our innovative quest system, combining the flexibility of
        on-demand services with the assurance of video call verification.
      </p>
      <ul class="list-none leading-loose space-y-4">
        <li class="flex items-center space-x-2">
          <img
            src={checkImage}
            class="rounded-full bg-white h-3"
            alt="Checkmark"
          />
          <span>Post your tasks and connect.</span>
        </li>
        <li class="flex items-baseline space-x-2">
          <img
            src={checkImage}
            class="rounded-full bg-white h-3"
            alt="Checkmark"
          />
          <span>
            Our capable community members who are more than eager to lend a
            hand.
          </span>
        </li>
        <li class="flex items-baseline space-x-2">
          <img
            src={checkImage}
            class="rounded-full bg-white h-3"
            alt="Checkmark"
          />
          <span>
            No task is too big or small, you can discuss and navigate them
            virtually before any work commences.
          </span>
        </li>
      </ul>
    </div>
  </div>
  )
}
