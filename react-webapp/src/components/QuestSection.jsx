import React from 'react';
import { checkImage, questImage } from '../images';
export default function QuestSection() {
  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 mb-6 justify-center items-center">
        <img src={questImage} />

        <div className="z-20  space-y-3">
          <h1 className="text-3xl md:text-6xl font-black">The Quest System</h1>
          <h2 className="text-2xl  font-bold">Outsource and Accomplish</h2>
          <p className="mb-4 leading-loose">
            Welcome to our innovative quest system, combining the flexibility of
            on-demand services with the assurance of video call verification.
          </p>
          <ul className="list-none leading-loose space-y-1">
            <li className="flex items-center space-x-2">
              <img
                src={checkImage}
                className="rounded-full bg-white h-3"
                alt="Checkmark"
              />
              <span>Post your tasks and connect.</span>
            </li>
            <li className="flex items-baseline space-x-2">
              <img
                src={checkImage}
                className="rounded-full bg-white h-3"
                alt="Checkmark"
              />
              <span>
                Our capable community members who are more than eager to lend a
                hand.
              </span>
            </li>
            <li className="flex items-baseline space-x-2">
              <img
                src={checkImage}
                className="rounded-full bg-white h-3"
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
    </div>
  );
}
