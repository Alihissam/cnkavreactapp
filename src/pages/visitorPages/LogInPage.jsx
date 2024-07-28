import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate for react-router-dom v6+
import { helloHand } from '../../images';
import { googleLogo, cnkavLogo, signupbg } from '../../images';
export default function LogInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
    // if (email === "root@gmail.com" && password === "12345") {

    // } else {
    //   alert("Invalid email or password.");
    // }
  };

  return (
    <div
      className="space-y-6 h-[90vh]  p-8 rounded-md "
      style={{
        backgroundImage: `url(${signupbg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black overlay with 50% opacity
        backgroundBlendMode: 'overlay',
        overflowY: 'scroll',
      }}
    >
      <div className="flex justify-end">
        <button
          onClick={() => setModal(false)}
          className="text-white text-2xl font-bold"
        >
          &times;
        </button>
      </div>


      <div className="px-10 text-white text-5xl font-bold py-3 flex items-center">
        Welcome Back <img src={helloHand} alt="Hello Hand" className="h-10 ml-2" />
      </div>
      <form className="px-10">
        <div className="mb-4">
          <label className="block text-white text-sm mb-2" htmlFor="username">
            User Name
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-3 border border-gray-700 rounded bg-transparent text-white"
            placeholder="Enter User Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border border-gray-700 rounded bg-transparent text-white"
            placeholder="At least 8 characters"
          />
        </div>
        <div className="mb-6 flex justify-end">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="flex justify-center">
          <button
            className="w-[60%] text-white py-3 rounded-lg font-bold flex items-center justify-center mb-2 transition"
            style={{
              backgroundColor: 'transparent',
              border: '2px solid transparent',
              borderImage: 'linear-gradient(120deg, red, yellow) 1',
            }}
          >
            Sign up
          </button>
        </div>
      </form>
      <div className="text-center mb-4">
        <span>______________________</span> or{' '}
        <span>______________________</span>
      </div>

      <div className="mt-4 flex flex-col items-center">
        <button
          className="w-[60%] text-white py-3 rounded-lg font-bold flex items-center justify-center mb-2 transition"
          style={{
            backgroundColor: 'transparent',
            border: '2px solid transparent',
          }}
        >
          <img src={googleLogo} alt="Google" className="w-6 h-6 mr-2" />
          Sign up with Google
        </button>
        <button className="w-[60%] text-white py-3 rounded-lg font-bold flex items-center justify-center transition">
          Sign up with Apple
        </button>
        <button className="py-2 ">
          <p>
            Don't you have an account?{' '}
            <span className=" text-blue-700">Sign up</span>
          </p>
        </button>
      </div>
    </div>
  );
}
