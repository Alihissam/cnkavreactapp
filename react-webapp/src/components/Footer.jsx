import React from "react";
import {
  cnkavLogo,
  youtubeImage,
  twitterImage,
  linkedinImage,
} from "../images";

export default function Footer() {
  return (
    <footer class=" py-6 mt-40">
      <div class="flex flex-col px-20 md:flex-row justify-between mb-4">
        <div class="w-full md:w-1/2 mb-6 md:mb-20 ">
          <img src={cnkavLogo} alt="Logo" class="h-24 px-4 my-3 " />
          <p class="mt-3 px-4 text-white">
            At CNKAV, we envision a world where anyone, regardless of their
            location, can tap into the potential of digital platforms to enrich
            their personal and professional experiences. As we continue to
            innovate, our commitment lies in creating digital landscapes where
            opportunities abound and growth is a shared journey.
          </p>
        </div>

        <div class="flex justify-end-1/3 gap-10">
          <div>
            <h1 class="text-xl mb-4">Product</h1>
            <ul class="text-gray-400">
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Prices</a>
              </li>
              <li>
                <a>Book a demo</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 class="text-xl mb-4">Company</h1>
            <ul class="text-gray-400">
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border border-slate-800 w-full p-0 m-0"></div>

      <div class="flex justify-between gap-3 mt-12 px-24">
        <div class="flex justify-between gap-3 text-white">
          © 2024 Welcome. All right reserved.{" "}
          <span className="mx-4">Privacy Policy</span> Terms of Service
        </div>

        <div class="flex gap-4">
          <a href="https://www.facebook.com" target="_blank">
            <img src={youtubeImage} alt="Facebook" class="h-6 w-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <img src={twitterImage} alt="Twitter" class="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src={linkedinImage} alt="Instagram" class="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
