import React from "react";
import useFetchWorkers from "./useFetchWorkers";
import Sidebar from "./Sidebar";

const Nomination = () => {

  const { data: workers,isError, error, isLoading } = useFetchWorkers("junior");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
          {isLoading && <p>Loading...</p>}
          {isError && (
            <div className="text-red-500">
              <p>{error.message}</p>
              <pre>{error.stack}</pre>
            </div>
          )}
          {!isLoading && !isError && workers && (
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
        </div>
      </div>
    </div>
  );
};

export default Nomination;