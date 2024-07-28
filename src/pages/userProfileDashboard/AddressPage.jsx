import { useState } from "react";
import AddNewShipingAddress from "./AddNewShipingAddress";

const AddressesPage = () => {
  const [isAddNewShipingAddress, setAddNewShipingAddress] = useState(false);

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col mx-[30%]">
        <section className="shadow-md rounded-lg p-6 mb-8">
          <form>
            <div className="mb-16 mt-40">
              <div className="mb-4 text-white">
                <input
                  type="text"
                  name="email"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg"
                  placeholder="Edit"
                />
              </div>
              <div className="mb-4 text-white">
                <button
                  type="button"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg bg-white text-black text-left"
                  onClick={() =>
                    setAddNewShipingAddress(!isAddNewShipingAddress)
                  }
                >
                  Add new Shipping Address
                </button>
              </div>
            </div>
            <div className="mb-4 text-white">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="text"
                name="email"
                className="w-full p-3 border-2 text-black border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4 text-white">
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
      {isAddNewShipingAddress && (
        <AddNewShipingAddress
          setAddNewShipingAddress={setAddNewShipingAddress}
        />
      )}
    </div>
  );
};

export default AddressesPage;
