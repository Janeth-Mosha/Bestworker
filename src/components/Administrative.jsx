// Nomination.js
import React from "react";
import Sidebar from "./Sidebar"; // Import the Sidebar component

const names = [
  { id: 1, name: 'Alice', imageUrl: 'p1.jpeg' },
  { id: 2, name: 'Bob', imageUrl: 'p2.jpeg' },
  { id: 3, name: 'Charlie', imageUrl: 'p3.jpeg' },
  { id: 4, name: 'David', imageUrl: 'p4.jpeg' },
  { id: 5, name: 'Eve', imageUrl: 'p5.jpeg' },
  { id: 6, name: 'Frank', imageUrl: 'p6.jpeg' },
  { id: 7, name: 'Grace', imageUrl: 'p7.jpeg' },
  { id: 8, name: 'Heidi', imageUrl: 'p8.jpeg' },
  { id: 9, name: 'Ivan', imageUrl: 'p9.jpeg' },
  { id: 10, name: 'Judy', imageUrl: 'p10.jpeg' },
  { id: 11, name: 'Karl', imageUrl: 'p11.jpeg' },
  { id: 12, name: 'Leo', imageUrl: 'https://via.placeholder.com/40' },
  { id: 13, name: 'Mallory', imageUrl: 'https://via.placeholder.com/40' },
  { id: 14, name: 'Niaj', imageUrl: 'https://via.placeholder.com/40' },
  { id: 15, name: 'Oscar', imageUrl: 'https://via.placeholder.com/40' },
  { id: 16, name: 'Peggy', imageUrl: 'https://via.placeholder.com/40' },
  { id: 17, name: 'Quinn', imageUrl: 'https://via.placeholder.com/40' },
  { id: 18, name: 'Rupert', imageUrl: 'https://via.placeholder.com/40' },
  { id: 19, name: 'Sybil', imageUrl: 'https://via.placeholder.com/40' },
  { id: 20, name: 'Trudy', imageUrl: 'https://via.placeholder.com/40' },
 
];

const Administrative = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Blue header with Dashboard heading and Profile button */}
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl">Nomination</h1>
        <div>
          {/* Profile button */}
          <button className="bg-white text-blue-500 py-1 px-3 rounded-full">
            Profile
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-4 overflow-y-auto">
            <div><h1>Administrative Workers</h1></div>
          {/* Table */}
          <div className="container mx-auto mt-10">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4">Image</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Choice</th>
                </tr>
              </thead>
              <tbody>
                {names.map((person) => (
                  <tr key={person.id} className="even:bg-gray-100">
                    <td className="py-2 px-4">
                      <img
                        src={person.imageUrl}
                        alt={person.name}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="py-2 px-4">{person.name}</td>
                    <td className="py-2 px-4">
                      <select className="border rounded px-2 py-1">
                      <option></option>
                        <option>First Choice</option>
                        <option>Second Choice</option>
                        <option>Third Choice</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administrative;
