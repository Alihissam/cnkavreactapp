import React, { useState } from "react";

const AffiliMarketLinkModal = ({ setAffiliMarketLinkModal }) => {
  const [formData, setFormData] = useState({
    website: "",

    clientSize: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the form submission
    alert("Message sent! We will get back to you soon.");
    // Reset form data
    setFormData({
      website: "",

      clientSize: "",
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50  items-center justify-center z-50 overflow-auto">
      <div className="flex flex-col mx-[20%] bg-black px-[10%]">
        <div className="text-right mt-20">
          <button
            onClick={() => setAffiliMarketLinkModal(false)}
            className="text-3xl text-white"
          >
            &times;
          </button>
        </div>
        <div className="mx-6">
          <h1 className="text-2xl font-bold mb-6 mt-10">
            Generate Affiliate Product Link
          </h1>
          <p className="mb-10">
            Generate an link to start earning from affiliate marketing.{" "}
          </p>
          <p>
            Steps Select the product and automatically an link will be generated
            and pate the link and add affiliation code like custom slug. Also,
            after that step generate and when visitors pay you can check your
            balance of the 15% commission earned if purchased.
          </p>
        </div>

        <section className="bg-black shadow-md rounded-lg p-6 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full p-3 border-2 text-black border-gray-300 rounded-lg "
                required
                placeholder="Enter any page URL from our site"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="clientSize"
                value={formData.clientSize}
                onChange={handleInputChange}
                className="w-full p-3 border-2 text-black border-gray-300 rounded-lg"
                required
                placeholder="Add a new custom slug"
              />
            </div>

            <button
              to=""
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
          </form>
        </section>
      </div>
    </div>
  );
};

export default AffiliMarketLinkModal;
