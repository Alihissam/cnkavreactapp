import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate for react-router-dom v6+
import {
  googleLogo,
  facebookLogo,
  appleLogo,
  cnkavLogo,
  helloHand,
} from "../../images";

export default function LogInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "root@gmail.com" && password === "12345") {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="relative bg-transparent shadow-lg p-8 z-10 w-2/4 mx-4 md:mx-0">
        <div className="flex items-center justify-center mt-8 pt-40">
          <img src={cnkavLogo} alt="CNKAV Logo" className="h-20" />
        </div>
        <div className="flex items-center justify-center space-x-6">
          <h2 className="text-white text-4xl font-bold py-3">Welcome Back</h2>
          <img src={helloHand} alt="Hello Hand" className="h-10" />
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="username">
              Email
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white"
              placeholder="Example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white py-3 rounded-lg font-bold flex items-center justify-center mb-2 transition"
            style={{
              backgroundColor: "transparent",
              border: "2px solid transparent",
              borderImage: "linear-gradient(120deg, red, yellow) 1",
            }}
          >
            Sign In
          </button>
        </form>

        <div className="text-center mb-4">
          <span>______________________</span> or{" "}
          <span>______________________</span>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="w-full text-white py-3 rounded-lg font-bold flex items-center justify-center mb-2 transition"
            style={{
              backgroundColor: "transparent",
              border: "2px solid transparent",
              borderImage: "linear-gradient(120deg, red, yellow) 1",
            }}
            aria-label="Sign up with Google"
          >
            <img src={googleLogo} alt="Google" className="w-6 h-6 mr-2" />
            Sign up with Google
          </button>
          <button
            type="button"
            className="w-full text-white py-3 rounded-lg font-bold flex items-center justify-center my-4 transition"
            style={{
              backgroundColor: "transparent",
              border: "2px solid transparent",
              borderImage: "linear-gradient(120deg, red, yellow) 1",
            }}
            aria-label="Sign up with Facebook"
          >
            <img src={facebookLogo} alt="Facebook" className="w-6 h-6 mr-2" />
            Sign up with Facebook
          </button>
          <button
            type="button"
            className="w-full text-white py-3 rounded-lg font-bold flex items-center justify-center transition space-x-6"
            style={{
              backgroundColor: "transparent",
              border: "2px solid transparent",
              borderImage: "linear-gradient(120deg, red, yellow) 1",
            }}
            aria-label="Sign up with Apple"
          >
            <img
              src={appleLogo}
              alt="Apple"
              className="w-6 h-6 mr-2 bg-white rounded-full"
            />
            <span> Sign up with Apple</span>
          </button>
        </div>

        <div className="text-center py-6">
          <button type="button">
            <p>
              Don't have an account?{" "}
              <span className="text-blue-700 cursor-pointer">Sign up</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
