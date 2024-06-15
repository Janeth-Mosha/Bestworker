// src/components/Nomination.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const NominationCategory = () => {
  const { category } = useParams();
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkers = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://udsmbestworker.onrender.com/workers/by-category?category=${category}"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch workers");
        }
        const data = await response.json();
        setWorkers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, [category]);

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl">Nomination</h1>
        <div>
          <button className="bg-white text-blue-500 py-1 px-3 rounded-full">
            Profile
          </button>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 p-4 overflow-y-auto">
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && (
            <div className="container mx-auto mt-10">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4">Image</th>
                    <th className="py-2 px-4">Email</th>
                    <th className="py-2 px-4">Choice</th>
                    <th className="py-2 px-4">Nominate</th>
                  </tr>
                </thead>
                <tbody>
                  {workers.map((worker) => (
                    <tr key={worker.id} className="even:bg-gray-100">
                      <td className="py-2 px-4"></td>
                      <td className="py-2 px-4">{worker.email}</td>
                      <td className="py-2 px-4">
                        <select className="border rounded px-2 py-1">
                          <option></option>
                          <option>First Choice</option>
                          <option>Second Choice</option>
                          <option>Third Choice</option>
                        </select>
                      </td>
                      <td className="py-2 px-4">
                        <button className="bg-blue-500 text-white py-1 px-3 rounded-full">
                          Nominate
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
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

export default NominationCategory;

