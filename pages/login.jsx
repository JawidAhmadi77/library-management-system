import React from "react";
import { logo } from "../src/assets/images/images";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4">
      <div className="w-full max-w-md bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-8">

        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="w-20 sm:w-28 mb-6" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-700">
          Welcome Back
        </h1>

        <p className="text-center text-gray-700 mt-2 mb-8">
          Login to continue
        </p>

        {/* Form */}
        <div className="space-y-5">

          <input
            type="email"
            placeholder="Enter your Email..."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none bg-white/80
            focus:border-blue-500 focus:ring-4 focus:ring-blue-300 transition duration-300"
          />

          <input
            type="password"
            placeholder="Enter your Password..."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none bg-white/80
            focus:border-blue-500 focus:ring-4 focus:ring-blue-300 transition duration-300"
          />

        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mt-3">
          <a
            href="#"
            className="text-sm text-blue-600 hover:text-blue-800 transition"
          >
            Forgot Password?
          </a>
        </div>

        {/* Button */}
        <button
          className="w-full mt-12 py-3 rounded-xl bg-blue-600 text-white font-semibold
          hover:bg-white hover:text-blue-600 border border-blue-600
          hover:shadow-xl hover:shadow-blue-400/50 transition-all duration-300"
        >
          Login
        </button>

        {/* Register */}
        <p className="text-center mt-6 text-gray-700">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-blue-700 font-semibold hover:underline"
          >
            Sign Up
          </a>
        </p>

      </div>
    </div>
  );
}