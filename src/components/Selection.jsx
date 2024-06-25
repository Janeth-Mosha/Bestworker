// Selection.js
import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import Side from "./Side";


const Selection = () => {
  const rules = [
    "All eligible voters must nominate three candidates in order of ranking preferences.",
    "Every worker is allowed to nominate and vote for himself or herself.",
    "Staff members who are eligible voters may vote for the best workers even if they did not participate in the nomination process.",
    "There are three categories for voting which are Senior staff, Junior staff, and Administrative staffs.",
    "Nomination is done in ranking, the first person you rank acquires 3 points, the second one acquires 2 points, and the last person acquires 1 point.",
  ];

  return (
    <div>
      {/* Blue header with Selection rules heading */}
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl">Selection Rules</h1>
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

        {/* Main Content */}
        <div className="flex-1 p-4">
          <h2 className="text-xl font-bold mb-4">Selection Rules To Consider</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Rule No.</th>
                  <th className="py-2 px-4 border-b">Description</th>
                </tr>
              </thead>
              <tbody>
                {rules.map((rule, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <td className="py-2 px-4 border-b">{index + 1}</td>
                    <td className="py-2 px-4 border-b text-left">{rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

       
          <div className="flex justify-end mt-4">
            <Link to="/Welcome">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
