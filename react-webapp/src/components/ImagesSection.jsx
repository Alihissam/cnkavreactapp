import React from 'react'
import {Image1,Image2,Image3,Image4} from '../images'
export default function ImagesSection() {
  return (
    <div class="flex flex-col md:flex-row stify-between gap-3 p-8">
    <div class="border rounded-lg p-4 relative">
      <div class="absolute bottom-0 left-0 bg-black bg-opacity-75 p-2 z-10">
        <h1>Embrace the Experience</h1>
        <p>
          Join us for intellectual conversations in our exclusive chat rooms
          and memorable annual events. Start your journey with Exclusive Room
          today and step into a world of glamour, intellect, and unforgettable
          experiences.
        </p>
      </div>

      <img src={Image1} />
    </div>
    <div class="">
      <div class="border rounded-lg p-4 relative mb-4">
        <p class="absolute bottom-0 left-0 bg-black bg-opacity-75 p-2 z-10">
          Our platform promises state-of-the-art security and an
          easy-to-navigate design. You can converse freely and fearlessly,
          assured that your information and privacy stay well-protected.
        </p>

        <img src={Image3}  class="rounded-lg" />
      </div>
      <div class="border rounded-lg p-4 relative">
        <p class="absolute bottom-0 left-0 bg-black bg-opacity-75 p-2 z-10">
          We understand how important it is to stay connected and grow. Our
          platform allows you to meet with individuals from various
          backgrounds and industries, providing avenues for networking and
          knowledge sharing.
        </p>
        <img src={Image2} class="filter grayscale rounded-lg" />
      </div>
    </div>
    <div class="border rounded-lg p-4 relative">
      <div class="absolute bottom-0 left-0 bg-black bg-opacity-75 p-2 z-10">
        <h1>The Grandeur of Our Annual Events</h1>
        <p>
          n this exclusive club, we don’t just stop at chats. Exclusive Room
          holds an annual event, giving you an opportunity to engage in a
          delightful blend of entertainment and learning with individuals from
          across the world.
        </p>
      </div>
      <img src={Image4} />
    </div>
  </div>
  )
}
