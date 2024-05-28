import React from "react";

import { Link } from "react-router-dom";
function login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-200 flex rounded-lg shadow-lg overflow-hidden w-full md:w-3/4 max-w-4xl">
        <div className="w-full md:w-1/2">
          <img
            src="/login.png"
            alt="Login"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">Hello, Welcome back</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
              
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
            </div>
            <Link to="/Dashboard">
              <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
