const AddNewShipingAddress = ({ setAddNewShipingAddress }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50  items-center justify-center z-50 overflow-auto">
      <div className="flex flex-col mx-[30%] bg-black text-white mt-40 joinModal">
        <div className="text-right">
          <button
            className="text-2xl text-white"
            onClick={() => setAddNewShipingAddress(false)}
          >
            &times;
          </button>
        </div>
        <section className="shadow-md rounded-lg p-6 mb-8">
          <form>
            <div className="mb-4 text-white">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border-2 text-black border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4 text-hite">
              <label className="block text-sm font-medium mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                name="company"
                className="w-full p-3 border-2 text-black border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4 text-white">
              <label className="block text-sm font-medium mb-2">
                Country/Region
              </label>
              <input
                type="text"
                name="country"
                className="w-full p-3 border-2 text-black border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4 text-white">
              <label className="block text-sm font-medium mb-2">
                Street Address
              </label>
              <input
                type="text"
                name="street"
                className="w-full p-3 border-2 text-black border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4 text-white">
              <label className="block text-sm font-medium mb-2">Postcode</label>
              <input
                type="text"
                name="postcode"
                className="w-full p-3 border-2 text-black border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4 text-white">
              <label className="block text-sm font-medium mb-2">
                Town/City
              </label>
              <input
                type="text"
                name="city"
                className="w-full p-3 border-2 text-black border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4 text-white">
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                className="w-full p-3 border-2 text-black border-gray-300 rounded-lg"
              />
            </div>
            <div className="pt-6 text-white w-full">
              <button
                type="submit"
                className="rounded-3xl w-full bg-black text-white py-3 px-4 font-bold"
                style={{
                  border: "2px solid transparent",
                  borderImage: "linear-gradient(120deg, red, yellow)",
                  borderImageSlice: 1,
                }}
              >
                Confirm
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddNewShipingAddress;
