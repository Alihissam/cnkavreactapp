import React, { useState } from "react";
import PublishNewEventModal from "./PublishNewEventModal";
import { useNavigate } from "react-router-dom";

const MyEventsPurchasedEvents = () => {
  const [isPublishNewEventModal, setPublishNewEventModal] = useState(false);
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    if (event.target.value === "exclusive-room-events") {
      navigate("/dashboard/events/exclusive-room-events");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-8 ">
      <div className="w-full max-w-lg mt-16">
        <form className="space-y-4">
          <select
            id="eventType"
            className="bg-white border-gray-700 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            onChange={handleSelectChange}
          >
            <option value="" disabled selected>
              Select Event Type
            </option>

            <option value="exclusive-room-events">Exclusive Room Events</option>
            <option value="community-events">Community Events</option>
            <option value="conference">Conference</option>
            <option value="workshop">Workshop</option>
            <option value="webinar">Webinar</option>
            <option value="meetup">Meetup</option>
          </select>
          <div className="relative">
            <input
              type="text"
              id="search"
              className="bg-white border border-gray-700 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 pr-10"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="bg-white border border-gray-700 text-left text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            onClick={() => setPublishNewEventModal(!isPublishNewEventModal)}
          >
            Post New Community Event
          </button>
        </form>

        <div className="flex justify-center">
          <button className="bg-white text-black py-3 w-3/4 mt-8 rounded-lg hover:bg-black hover:text-white transition duration-300">
            Load More
          </button>
        </div>
      </div>
      {isPublishNewEventModal && (
        <PublishNewEventModal
          setPublishNewEventModal={setPublishNewEventModal}
        />
      )}
    </div>
  );
};

export default MyEventsPurchasedEvents;
