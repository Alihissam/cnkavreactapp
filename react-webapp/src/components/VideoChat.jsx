import React from 'react'
import { videochat } from '../images'

export default function VideoChat() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 mt-20">
    <div className="p-9">
      <h1 className="text-5xl md:text-6xl font-black mb-4">Video Chat</h1>
      <h2 className="text-2xl mb-4 font-bold">Transformative Task Discussions</h2>
      <p className="mb-4 leading-loose">
        Say goodbye to endless back-and-forth texts and hello to seamless
        video chat discussions. Detail your needs, align your goals, and
        orchestrate your tasks through direct online conversations. Through
        video chat, you not only get to specify your requests but also
        evaluate your service provider’s suitability to the task.
      </p>
    </div>

    <div>
      <img
        src={videochat}
      />
    </div>
  </div>
  )
}
