import React from 'react'
import 'tailwindcss/tailwind.css';

export default function InfluewaveSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="h-[100vh] pt-20 w-[80%] md:p-12 mx-auto text-center grid gap-5">
        <h1 className="text-5xl md:text-7xl font-bold opacity-0 transform translate-y-10 transition-opacity duration-1000 ease-out" data-scroll>
          Influewave
        </h1>
        <h2 className="text-2xl font-bold opacity-0 transform translate-y-10 transition-opacity duration-1000 ease-out delay-200" data-scroll>
          Harness the Power of Community and Collaboration
        </h2>
        <p className="text-xl opacity-0 transform translate-y-10 transition-opacity duration-1000 ease-out delay-400" data-scroll>
          Welcome to Influewave, a space where you meet, interact, and grow with
          a thriving community of innovative minds. But we are more than just a
          virtual meeting place, we are a launching pad to elevate your ideas
          and projects through seamless collaboration and enriched connections.
        </p>
      </div>
    </section>
  )
}

document.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('[data-scroll]');
  elements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add('opacity-100', 'translate-y-0');
    }
  });
});
