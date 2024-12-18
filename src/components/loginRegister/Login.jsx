import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form validation and login logic here
    console.log("Form submitted:", formData);
  };


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        {/* Google Login */}
        <div className="mt-6 text-center">
          <button
            onClick={() => alert("Google Login clicked")}
            className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <FaGoogle className="h-6 w-6 mr-2" />
            Login with Google
          </button>
        </div>

        {/* Registration Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <button className="text-blue-500 hover:underline"> <Link to={'/register'}> Register </Link> </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
