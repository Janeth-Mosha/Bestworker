import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router

const Side = () => {
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
                to="/dashboard"
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
            
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Side;
