import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaMessage, FaPencil, FaShare } from 'react-icons/fa6';

const Community = () => {
  return (
    <div className="flex flex-col items-center px-4 md:p-0 justify-center min-h-screen py-2  bg-black ">
      
      
      <div className="flex flex-col justify-center items-center mt-32">

      <button className="absolute top-28 left-8 flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          <span>Publish New Post</span>
          <FaPencil />

        </button>
       
        <form className="space-y-4 py-5 w-full md:w-9/12">
         
          <select
            id="eventType"
            className="bg-white border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
          >
            <option value="" disabled selected>Select Chat Communities</option>
            <option value="conference">Conference</option>
            <option value="workshop">Workshop</option>
            <option value="webinar">Webinar</option>
            <option value="meetup">Meetup</option>
            <option value="meetup">community</option>

          </select>
          <div className="relative">
            <input
              type="text"
              id="search"
              className="bg-white border border-gray-700 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 pr-10"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </form>

        <div className="flex p-2 w-full md:w-1/2 bg-[rgb(13,13,13)] border-b border-gray-500 mb-5">
          <img
            className="rounded-full w-12 h-12"
            src="data:image/jpeg;base64,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"
          />
          <div className="px-3">
            <p className="text-center text-gray-500">
              {' '}
              Mariane @marianeee ·1/21/20
            </p>

            <div className="py-4">
              Hey
              <p className="text-blue-500">
                @theflaticon @iconmonstr @pixsellz @dan ielbruce_ @romanshamin
                @_vect_ @glyphish !
              </p>
              Check our our new article “Top Icons Packs and Resources for Web”.
              You are in!
              <br />
              😎
              <br />
              👉 marianeee.com/blog/top-icons...
              <div className="rounded-md border border-gray-500 mt-3">
                <img src="https://media.istockphoto.com/id/94999221/photo/field-in-summer.webp?b=1&s=170667a&w=0&k=20&c=_Hs2Xf_WoX8seFwZ6vmBMztKNvyR2724DkZEf04CbgE=" />

                <div className="p-2">
                  <h1 className="text-md font-semibold">
                    Top Icons Packs and Resources for Web
                  </h1>
                  <a className="text-gray-400">flatlogic.com</a>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-12 ">
             
              <div className="flex items-center gap-1">
                <FaMessage className="" />{' '}
                <span className="text-sm">7</span>
              </div>

              <div className="flex items-center gap-1">
                <FaHeart className="text-red-500" />{' '}
                <span className="text-sm">3</span>
              </div>
              <FaShare />
            </div>
          </div>
        </div>
        <div className="flex p-2 w-full md:w-1/2 bg-[#0D0D0D] border-b border-gray-500 mb-5">
          <img
            className="rounded-full w-12 h-12"
            src="data:image/jpeg;base64,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"
          />
          <div className="px-3">
            <p className="text-center text-gray-500">
              {' '}
              Mariane @marianeee ·1/21/20
            </p>

            <div className="py-4">
              Hey
              <p className="text-blue-500">
                @theflaticon @iconmonstr @pixsellz @dan ielbruce_ @romanshamin
                @_vect_ @glyphish !
              </p>
              Check our our new article “Top Icons Packs and Resources for Web”.
              You are in!
              <br />
              😎
              <br />
              👉 marianeee.com/blog/top-icons...
              <div className="rounded-md border border-gray-500 mt-3">
                <img src="https://media.istockphoto.com/id/94999221/photo/field-in-summer.webp?b=1&s=170667a&w=0&k=20&c=_Hs2Xf_WoX8seFwZ6vmBMztKNvyR2724DkZEf04CbgE=" />

                <div className="p-2">
                  <h1 className="text-md font-semibold">
                    Top Icons Packs and Resources for Web
                  </h1>
                  <a className="text-gray-400">flatlogic.com</a>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-12">
            <div className="flex items-center gap-1">
                <FaMessage className="" />{' '}
                <span className="text-sm">7</span>
              </div>

              <div className="flex items-center gap-1">
                <FaHeart className="text-red-500" />{' '}
                <span className="text-sm">3</span>
              </div>
              <FaShare />
            </div>
          </div>
        </div>
        <button className="bg-white text-black py-3 w-1/2 mt-12 rounded-xl">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Community;
