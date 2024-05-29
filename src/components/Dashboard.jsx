// Dashboard.js
import React from "react";
import Side from "./Side"; // Import the Sidebar component


const Dashboard = () => {
  
  return (
    <div className="flex flex-col min-h-screen">
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

      <div className="flex flex-1">
        {/* Sidebar */}
        <Side />

        {/* Main content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 text-center">
            Welcome to Best Worker Selection Cohort 2024
          </h2>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
           
            <div className="bg-white shadow-lg rounded-lg p-4 text-center">
              <h3 className="text-xl font-bold mb-2">Active Voters</h3>
              <p className="text-2xl">--</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 text-center">
              <h3 className="text-xl font-bold mb-2">Pending Nominations</h3>
              <p className="text-2xl">--</p>
            </div>
          </div>

          {/* Task List */}
          <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
            <h3 className="text-xl font-bold mb-4">Tasks</h3>
            <ul>
              <li className="mb-2 flex justify-between items-center">
                <span>Review nominations</span>
                <input type="checkbox" />
              </li>
              <li className="mb-2 flex justify-between items-center">
                <span>Updating my  profile</span>
                <input type="checkbox" />
              </li>
              <li className="mb-2 flex justify-between items-center">
                <span>Prepare for Voting</span>
                <input type="checkbox" />
              </li>
              
            </ul>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
