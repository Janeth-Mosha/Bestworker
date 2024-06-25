import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import { useCollegeResults, useUniversityResults } from "./Hooks/fetchResults"; // Adjust the path accordingly

const Result = () => {
  const backgroundImageUrl = "udogo.png";
  const [showCollegeResult, setShowCollegeResult] = useState(false);
  const [showUniversityResult, setShowUniversityResult] = useState(false);

  const { data: collegeResults, isLoading: isLoadingCollegeResults, isError: isErrorCollegeResults } = useCollegeResults(showCollegeResult);

  const { data: universityResults, isLoading: isLoadingUniversityResults, isError: isErrorUniversityResults } = useUniversityResults(showUniversityResult);

  const toggleCollegeResult = () => {
    setShowCollegeResult(!showCollegeResult);
  };

  const toggleUniversityResult = () => {
    setShowUniversityResult(!showUniversityResult);
  };

  const renderCategoryResults = (results, category) => {
    const result = results.find(r => r.category === category);
    return result ? (
      <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
        <h4 className="text-xl flex items-start font-bold mb-2">Best {category.charAt(0).toUpperCase() + category.slice(1)} Worker</h4>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <img src={`https://via.placeholder.com/50`} alt={result.name} className="w-12 h-12 rounded-full"/>
          </div>
          <div className="ml-4">
            <div className="text-lg font-semibold">{result.name}</div>
            
            <div className="text-sm text-blue-500 font-semibold">{result.percentage}% of votes</div>
          </div>
        </div>
      </div>
    ) : (
      <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
        <h4 className="text-lg font-bold mb-2">Best {category.charAt(0).toUpperCase() + category.slice(1)} Worker</h4>
        <p>Not yet found</p>
      </div>
    );
  };

  return (
    <div className="Result flex flex-col min-h-screen relative">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "opacity(0.1)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Blue header with Dashboard heading and Profile button */}
        <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl">Results</h1>
          <div>
            {/* Profile button */}
            <button className="bg-white text-blue-500 py-1 px-3 rounded-full">
              Profile
            </button>
          </div>
        </div>

        <div className="flex flex-1">
          {/* Content container */}
          <Sidebar /> {/* Sidebar */}

          <main className="flex-1 p-4 overflow-y-auto">
            {/* Main content area */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 text-center">
              Results
            </h2>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Total Votes</h3>
                <p className="text-2xl">---</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Candidates</h3>
                <p className="text-2xl">--</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Active Voters</h3>
                <p className="text-2xl">--</p>
              </div>
            </div>

            {/* Categories Section */}
            <div className="mb-6">
              <button
                onClick={toggleCollegeResult}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded mb-4 text-left"
              >
                College Unit Result
              </button>
              {showCollegeResult && (
                <div>
                  {isLoadingCollegeResults ? (
                    <div>Loading...</div>
                  ) : isErrorCollegeResults ? (
                    <div>Error loading college results</div>
                  ) : (
                    <>
                      {renderCategoryResults(collegeResults, "administrative")}
                      {renderCategoryResults(collegeResults, "junior")}
                      {renderCategoryResults(collegeResults, "senior")}
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="mb-6">
              <button
                onClick={toggleUniversityResult}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded mb-4 text-left"
              >
                University Level Result
              </button>
              {showUniversityResult && (
                <div>
                  {isLoadingUniversityResults ? (
                    <div>Loading...</div>
                  ) : isErrorUniversityResults ? (
                    <div>Error loading university results</div>
                  ) : (
                    <>
                      {renderCategoryResults(universityResults, "administrative")}
                      {renderCategoryResults(universityResults, "junior")}
                      {renderCategoryResults(universityResults, "senior")}
                    </>
                  )}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Result;
