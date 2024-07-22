import { questsBox1 } from "../../images";

const QuestslandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2  bg-black ">
      <div className="flex flex-col justify-center items-center mt-32">
        <form className="space-y-4 py-5 w-2/3">
          <div>
            <input
              type="text"
              id="questName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Options"
            />
          </div>

          <div>
            <input
              type="text"
              id="questName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="publish New Quest"
            />
          </div>
          <div>
            <input
              type="text"
              id="questName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Search Quest"
            />
          </div>
        </form>

        <img src={questsBox1} alt="" className="w-3/4 py-5" />
        <img src={questsBox1} alt="" className="w-3/4" />

        <button className="bg-white text-black py-3 w-4/6 mt-12 rounded-xl">
          Load More
        </button>
      </div>
    </div>
  );
};

export default QuestslandingPage;
