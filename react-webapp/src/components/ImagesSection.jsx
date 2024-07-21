import React from 'react'
import {Image1,Image2,Image3,Image4} from '../images'
export default function ImagesSection() {
  return (
    <div className="flex h-[80vh] flex-col md:flex-row stify-between gap-6 px-10">
   <div>
   <div className="shadow-lg border  border-gray-400 p-1 rounded-mdp-4 relative">
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 p-2 z-10">
        <h1 className="text-md  font-bold ml-3">Embrace the Experience</h1>
        <p className='p-2 font-sans text-[13px]'>
        Join us for intellectual conversations in our exclusive chat rooms and memorable annual events. Start your journey with Exclusive Room today and step into a world of glamour, intellect, and unforgettable experiences.
        </p>
      </div>
      <img src={Image1} className='border h-full w-full border-gray-500 shadow-2xl rounded-xl' />
    </div>
   </div>
    <div className="">
      <div className="shadow-lg border border-gray-400 p-1 rounded-md relative mb-4">
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 p-2 z-10">
        <p className='p-2 font-sans text-[13px]'>
        Our platform promises state-of-the-art security and an easy-to-navigate design. You can converse freely and fearlessly, assured that your information and privacy stay well-protected.
        </p>
        </div>

        <img src={Image3} className="rounded-lg" />
      </div>
      <div className="shadow-lg border border-gray-400 p-1 rounded-md  relative">
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 p-2 z-10">
        <p className='p-2 font-sans text-[13px]'>
        We understand how important it is to stay connected and grow. Our platform allows you to meet with individuals from various backgrounds and industries, providing avenues for networking and knowledge sharing.
        </p>
        
        </div>
        <img src={Image2} className="filter grayscale rounded-lg" />
      </div>
    </div>
    <div className="shadow-lg border border-gray-400 p-1 rounded-lg relative">
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 p-2 z-10">
        <h1 className="text-lg font-bold ml-2">
          The Grandeur of Our Annual Events
        </h1>
        <p className='p-2 font-sans text-[13px]'>
        In this exclusive club, we don’t just stop at chats. Exclusive Room holds an annual event, giving you an opportunity to engage in a delightful blend of entertainment and learning with individuals from across the world.
        </p>
      </div>
      <img src={Image4} />
    </div>
  </div>
  )
}
