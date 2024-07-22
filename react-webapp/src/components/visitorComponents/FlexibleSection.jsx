import React from 'react';

export default function FlexibleSection() {
  return (
    <div className="conatiner">
      <div className="md:p-12 px-6 mx-auto text-center py-20">
        <div className="md:w-4/5 mx-auto  space-y-3">
          <h1 className="text-3xl md:text-5xl font-black">
            Flexible Subscription Models
          </h1>
          <p className="leading-loose text-[14px] ">
            Whether you’re a task doer or a community enthusiast, our
            diversified subscription models cater to your unique needs. As a
            task doer, take advantage of our platform that connects you with
            individuals in need of your specialty, opening a window for a
            profitable endeavor. As a community lover, access engaging specialty
            groups, affiliate marketing opportunities, and <br />
            exclusive events.
          </p>
        </div>

        <p className="mt-20 text-center text-gray-400">
          * free tier has ads limited to one quest and quest post monthly.
        </p>
      </div>
    </div>
  );
}
