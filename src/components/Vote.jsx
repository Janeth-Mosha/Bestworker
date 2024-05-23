import React from "react";
import Sidebar from "./Sidebar"; // Import the Sidebar component

const Vote = () => {
  const profiles = [
    
    { id: 1, name: "Imani Mwambelo", imgSrc: "p2.jpeg" },
    { id: 2, name: "Precious John", imgSrc: "p3.jpeg" },
    { id: 3, name: "Janeth Evergreen", imgSrc: "p4.jpeg" },
   
  ];

  return (
    <div>
      {/* Blue header with Dashboard heading and Profile button */}
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl">Voting</h1>
        <div>
          {/* Profile button */}
          <button className="bg-white text-blue-500 py-1 px-3 rounded-full">
            Profile
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-grow min-h-screen flex flex-col items-center bg-gray-100">
          <h2 className="text-xl font-semibold my-2 text-center">Best Junior Worker Voting</h2>
          <div className="bg-gray-300 p-4 rounded-md w-full max-w-md mx-4" style={{ margin: "20px" }}>
            {profiles.map((profile) => (
              <div key={profile.id} className="flex items-center mb-4">
                <img
                  src={profile.imgSrc}
                  alt={profile.name}
                  className="rounded-full mr-4"
                  style={{ width: "100px", height: "100px" }}
                />
                <span className="flex-grow">{profile.name}</span>
                <input
                  type="radio"
                  name="profileSelection"
                  value={profile.id}
                  className="form-radio text-blue-600"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end w-full max-w-md mx-4 mb-4">
            <button className="bg-blue-500 text-white py-2 px-2 rounded-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vote;
