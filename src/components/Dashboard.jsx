import React from "react";

import Side from "./Side"; // Import the Sidebar component

const Dashboard = () => {
  return (
    <div>
      {/* Blue header with Dashboard heading and Profile button */}
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl">Dashboard</h1>
        <div>
          {/* Profile button */}
          <button className="bg-white text-blue-500 py-1 px-3 rounded-full">
            Profile
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <Side />

        {/* Middle content */}
        <div className="ml-64 flex justify-center items-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Welcome to Best Worker Selection Cohort 2024
            </h2>
            {/* Other content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
