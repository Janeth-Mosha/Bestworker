import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 text-white bg-blue-500 fixed top-4 left-4 z-20"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`bg-blue-500 text-black h-screen w-64 flex flex-col justify-between fixed lg:static transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="mt-8">
          <ul>
            <li>
              <Link
                to="/"
                className="flex items-center py-2 px-4 text-white hover:bg-gray-700"
              >
                <i className="bi bi-house-door mr-2"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/Selection"
                className="flex items-center py-2 px-4 text-white hover:bg-gray-700"
              >
                <i className="bi bi-funnel mr-2"></i> Selection Criteria
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Selection = () => {
  return (
    <div>
      {/* Blue header with Selection rules heading */}
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl">Selection Rules</h1>
        <div>
          {" "}
          {/* Profile button */}
          <button className="bg-white text-blue-500 py-1 px-3 rounded-full">
            Profile
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Middle content */}
        <div className="ml-32 mr-32 flex flex-col justify-center items-center h-screen relative">
          <div>
            {/* Rule blocks */}
            <div className="bg-gray-200 rounded-lg p-4 mb-4">
              <p>
                1. All eligible voters must nominate three candidates in order
                of ranking preferences.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4 mb-4">
              <p>
                2. Every worker is allowed to nominate and vote for himself or
                herself.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4 mb-4">
              <p>
                3. Staff members who are eligible voters may vote for the best
                workers even if they did not participate in the nomination
                process.
              </p>
            </div>
            {/* Add more rule blocks as needed */}
          </div>

          {/* Next button */}
          <div className="absolute bottom-4 right-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
