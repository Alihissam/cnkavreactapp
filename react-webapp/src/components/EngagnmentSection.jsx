import React from "react";
import { galleryImage, arrowIcon } from "../images";
export default function EngagnmentSection() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-24 p-5 mb-6 mt-32">
      <div class="px-16">
        <h2 class="text-4xl font-black mt-4 mb-4">Engage and Innovate</h2>
        <h2 class="text-2xl mb-4 font-bold">Outsource and Accomplish</h2>
        <p class="mb-4">
          The future of collaborative work and engaging community activities is
          here. Get started today with Influewave, where the influence is not
          just about single success but also shared growth and achievements.
          Choose the subscription that suits you best and start your journey to
          unlimited opportunities.
        </p>
        <h2 class="text-4xl font-black mb-4 pt-6">Affiliate Marketing</h2>
        <h2 class="text-2xl mb-4 font-bold">Monetize Your Influence</h2>
        <p class="mb-4">
          Expand your income sources with our integrated affiliate marketing
          system. Get discounts, earn commissions, and monetize your influence,
          all within our platform. No previous experience in marketing? Not to
          worry, we provide all the necessary tools and support to ensure your
          affiliate success.
        </p>
        <h2 class="text-4xl font-black mb-4 pt-6">eSports and Events</h2>
        <h2 class="text-2xl mb-4 font-bold">Step into the Spotlight</h2>
        <p class="mb-4">
          Step into adrenaline-packed eSports events and competitions. Our
          well-curated community section provides access to various trends,
          challenges, tournaments, and even exclusive professional gaming
          guidance. You don’t just watch eSports; you live them with Influewave.
        </p>
        <div class="mt-3">
          <button class="hidden md:flex items-center border-2 border-red-500 px-8 py-3 rounded-md text-white">
            <span>I am Ready to Join</span>
            <img
              src={arrowIcon}
              class="bg-white rounded-full h-6 ml-2"
              alt=""
            />
          </button>
        </div>
      </div>
      <div>
        <img src={galleryImage} alt="" />
      </div>
    </div>
  );
}
