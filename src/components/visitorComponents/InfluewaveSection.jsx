import React, { useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { videoImage } from "../../images";
import VideoPlayingModal from "./VideoPlayingModal";

export default function InfluewaveSection() {
  const [isVideoVisible, setVideoVisible] = useState(false);
  return (
    <section className="py-10">
      <div className="pt-[13rem] md:mb-0 flex items-center justify-center flex-col  text-center">
        <div className="w-[90%]  space-y-4 px-4">
          <h1 className="text-4xl md:text-6xl  font-extrabold " data-scroll>
            Influewave
          </h1>
          <h2 className="text-md md:text-2xl font-bold" data-scroll>
            Harness the Power of Community and Collaboration
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Welcome to Influewave, a space where you meet, interact, and grow
            with a thriving community of innovative minds. But we are more than
            just a virtual meeting place, we are a launching pad to elevate your
            ideas and projects through seamless
            <br /> collaboration and enriched connections.
          </p>
        </div>
      </div>

      <Link onClick={() => setVideoVisible(true)}>
        <img src={videoImage} class="w-full md:p-12 rounded-lg" />
      </Link>
      {isVideoVisible && (
        <VideoPlayingModal setVideoVisible={setVideoVisible} />
      )}
    </section>
  );
}

document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("[data-scroll]");
  elements.forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add("opacity-100", "translate-y-0");
    }
  });
});
