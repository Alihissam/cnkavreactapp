import React from 'react';
import 'tailwindcss/tailwind.css';
import { video } from '../images';

export default function InfluewaveSection() {
  return (
    <section className="container   py-4">
      <div className="h-[80vh] sm:h-[60vh] mb-12 md:mb-0 md:px-10 flex items-center justify-center flex-col  text-center">
        <div className='md:w-4/5  md:p-5  space-y-4'>
        <h1
          className="text-4xl md:text-7xl  font-bold opacity-0 transform translate-y-10 transition-opacity duration-1000 ease-out"
          data-scroll
        >
          Influewave
        </h1>
        <h2
          className="text-md md:text-lg font-bold opacity-0 transform translate-y-10 transition-opacity duration-1000 ease-out delay-200"
          data-scroll
        >
          Harness the Power of Community and Collaboration
        </h2>
        <p
          className="text-sm  opacity-0 transform translate-y-10 transition-opacity duration-1000 ease-out delay-400"
          data-scroll
        >
          Welcome to Influewave, a space where you meet, interact, and grow with
          a thriving community of innovative minds. But we are more than just a
          virtual meeting place, we are a launching pad to elevate your ideas
          and projects through seamless collaboration and enriched connections.
        </p>
        </div>
      </div>

      <img src={video} class="w-full md:p-12 rounded-lg" />
    </section>
  );
}

document.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('[data-scroll]');
  elements.forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add('opacity-100', 'translate-y-0');
    }
  });
});
