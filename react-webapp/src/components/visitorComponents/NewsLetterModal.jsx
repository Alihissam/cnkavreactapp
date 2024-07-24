import { cnkavLogo } from "../../images";

const NewsLetterModal = ({ setNewsLetterModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative bg-black  p-6 rounded-lg shadow-lg w-full max-w-md">
        <button
          onClick={() => setNewsLetterModal(false)}
          className="absolute top-4 right-4 text-white text-3xl mt-10"
        >
          &times;
        </button>
        <div className="flex justify-center">
          <img src={cnkavLogo} alt="cnkav logo" className="h-40 mt-32 mb-10" />
        </div>
        <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                name="email"
              >
                News Letter Sign Up
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg"
                placeholder="Enter Email"
              />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="rounded-3xl w-full bg-black text-white py-3 px-4 font-bold"
                style={{
                  border: "2px solid transparent",
                  borderImage: "linear-gradient(120deg, red, yellow)",
                  borderImageSlice: 1,
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-white">
            By signing up, you agree to Cnkav <br />
            <a href="#" className="text-white underline">
              Terms and Conditions
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterModal;
