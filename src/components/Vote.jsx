import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import useFetchEligibleWorkers from "./Hooks/useFetchEligibleWorkers"; // Adjust the import path as needed
import api from "../api"; // Import your API instance

const Vote = () => {
  const { category } = useParams(); // Assuming you're using React Router and the category is a route parameter
  const {
    data: profiles,
    isLoading,
    error,
  } = useFetchEligibleWorkers(category);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = (profileId) => {
    setSelectedProfile(profileId);
  };

  const handleSubmit = async () => {
    if (!selectedProfile) {
      alert("Please select a profile before submitting.");
      return;
    }
    try {
      await api.post("/votes/", {
        votee_id: selectedProfile,
        category: category,
      });
      alert("Vote submitted successfully!");
    } catch (err) {
      console.error("Error submitting vote", err);
      alert("Error submitting vote");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading workers: {error.message}</div>;

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
        <div className="flex-grow min-h-screen flex flex-col items-center bg-gray-100 p-4">
          <h2 className="text-2xl font-semibold my-4 text-center">
            {`Best ${
              category.charAt(0).toUpperCase() + category.slice(1)
            } Worker Voting`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                onClick={() => handleProfileSelect(profile.id)}
                className={`bg-white shadow-md rounded-lg p-6 flex flex-col items-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                  selectedProfile === profile.id
                    ? "border-4 border-blue-500"
                    : ""
                }`}
              >
                <img
                  src={`https://via.placeholder.com/150`} // Placeholder image URL
                  alt={profile.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <span className="text-lg font-semibold mb-4">
                  {profile.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-end w-full max-w-md mx-4 mb-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full fixed bottom-4 right-4 z-20"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vote;
