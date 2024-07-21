import React from "react";
import { videoChat } from "../images";

export default function VideoChat() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 mt-20">
      <div class="p-9">
        <h1 class="text-6xl font-black mb-4">Video Chat</h1>
        <h2 class="text-2xl mb-4 font-bold">Transformative Task Discussions</h2>
        <p class="mb-4 leading-loose">
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
  );
}
