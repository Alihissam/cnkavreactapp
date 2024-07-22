import React from "react";

const AccountDetails = () => {
  return (
    <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter Email"
          />
        </div>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2">
            Fullname
          </label>
          <input
            type="text"
            id="fullName"
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Name and Surname"
          />
        </div>
        <div className="pt-6 ">
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
      <p className="mt-6 text-center text-sm text-white">
        By signing up, you agree to Cnkav <br />
        <a href="#" className="text-white underline">
          Terms and Conditions
        </a>
        .
      </p>
    </div>
  );
};

export default AccountDetails;
