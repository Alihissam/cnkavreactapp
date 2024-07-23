import React, { useState } from "react";

const initialAddresses = [
  {
    id: 1,
    email: "johndoe@example.com",
    company: "John's Company",
    country: "USA",
    street: "123 Main St",
    postcode: "12345",
    city: "Anytown",
    phone: "+1 555-1234",
  },
  {
    id: 2,
    email: "janesmith@example.com",
    company: "",
    country: "Canada",
    street: "456 Elm St",
    postcode: "67890",
    city: "Somewhere",
    phone: "+1 555-5678",
  },
];

const AddressesPage = () => {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [editAddress, setEditAddress] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    country: "",
    street: "",
    postcode: "",
    city: "",
    phone: "",
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
    if (editAddress) {
      // Update existing address
      setAddresses(
        addresses.map((address) =>
          address.id === editAddress.id
            ? { ...formData, id: address.id }
            : address
        )
      );
    } else {
      // Add new address
      setAddresses([
        ...addresses,
        { ...formData, id: Date.now() }, // Use timestamp as a unique ID
      ]);
    }
    setFormData({
      email: "",
      company: "",
      country: "",
      street: "",
      postcode: "",
      city: "",
      phone: "",
    });
    setEditAddress(null);
  };

  const handleEdit = (address) => {
    setFormData({
      email: address.email,
      company: address.company,
      country: address.country,
      street: address.street,
      postcode: address.postcode,
      city: address.city,
      phone: address.phone,
    });
    setEditAddress(address);
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-center ">
        <section className="shadow-md rounded-lg p-6 mb-8">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-4 mt-40">
              {editAddress
                ? "Edit Shipping Address"
                : "Add New Shipping Address"}
            </h2>
            <div className="mb-4 text-white">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4 text-hite">
              <label className="block text-sm font-medium mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4 text-white">
              <label className="block text-sm font-medium mb-2">
                Country/Region
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4 text-white">
              <label className="block text-sm font-medium mb-2">
                Street Address
              </label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4 text-white">
              <label className="block text-sm font-medium mb-2">Postcode</label>
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4 text-white">
              <label className="block text-sm font-medium mb-2">
                Town/City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4 text-white">
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
                required
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

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 ">Existing Addresses</h2>
        {addresses.length === 0 ? (
          <p className="text-gray-500">No addresses found.</p>
        ) : (
          <ul>
            {addresses.map((address) => (
              <li
                key={address.id}
                className="flex items-start p-4 mb-4 rounded-lg bg-gray-100 shadow-md"
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    {address.street}
                  </p>
                  <p className="text-sm text-gray-700">
                    {address.city}, {address.country} {address.postcode}
                  </p>
                  <p className="text-sm text-gray-700">
                    Email: {address.email}
                  </p>
                  <p className="text-sm text-gray-700">
                    Phone: {address.phone}
                  </p>
                  {address.company && (
                    <p className="text-sm text-gray-700">
                      Company: {address.company}
                    </p>
                  )}
                </div>
                <div className="ml-4 flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(address)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(address.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default AddressesPage;
