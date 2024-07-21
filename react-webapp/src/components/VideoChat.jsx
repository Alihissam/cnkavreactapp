import React from "react";
import { videoChat } from "../images";

export default function VideoChat() {
  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 mb-6 justify-center items-center flex-col-reverse md:flex-row">
        <div className="p-4  space-y-4">
          <h1 className="text-3xl md:text-6xl font-black mb-4">Video Chat</h1>
          <h2 className="text-2xl font-bold">
            Transformative Task Discussions
          </h2>
          <p className=" leading-loose">
            Say goodbye to endless back-and-forth texts and hello to seamless
            video chat discussions. Detail your needs, align your goals, and
            orchestrate your tasks through direct online conversations. Through
            video chat, you not only get to specify your requests but also
            evaluate your service provider’s suitability to the task.
          </p>
        </div>

        <div>
          <img src={videoChat} />
        </div>
      </div>
    </div>
  );
}
