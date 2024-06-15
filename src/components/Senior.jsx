import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchWorkers from "./useFetchWorkers";
import Sidebar from "./Sidebar";

const Senior = ({ user }) => {
  const { data: workers, isError, error, isLoading } = useFetchWorkers("senior");
  const [selectedChoices, setSelectedChoices] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSelectChange = (workerId, choice) => {
    setSelectedChoices((prevChoices) => {
      // Remove the previous choice if it exists
      const prevChoice = prevChoices[workerId];
      if (prevChoice) {
        for (let key in prevChoices) {
          if (prevChoices[key] === prevChoice) {
            delete prevChoices[key];
          }
        }
      }
      return {
        ...prevChoices,
        [workerId]: choice,
      };
    });
  };

  const handleSubmit = () => {
    if (Object.keys(selectedChoices).length !== 3) {
      alert("Please select exactly three choices before submitting.");
      return;
    }

    const mappedChoices = {};
    for (let workerId in selectedChoices) {
      const choice = selectedChoices[workerId];
      mappedChoices[workerId] =
        choice === "First Choice"
          ? 3
          : choice === "Second Choice"
          ? 2
          : 1;
    }

    setSubmitted(true);
  };

  const isChoiceDisabled = (choice) => {
    return Object.values(selectedChoices).includes(choice);
  };

  const isWorkerDisabled = (workerId) => {
    return selectedChoices[workerId] !== undefined || Object.keys(selectedChoices).length >= 3;
  };

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
          <button className="bg-white text-blue-500 py-1 px-3 rounded-full" onClick={() => navigate("/profile")}>
            {user ? user.name : "Profile"}
          </button>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 p-4 overflow-y-auto relative">
          {isLoading && <p>Loading...</p>}
          {isError && (
            <div className="text-red-500">
              <p>{error.message}</p>
              <pre>{error.stack}</pre>
            </div>
          )}
          {!isLoading && !isError && workers && (
            <div className="container mx-auto mt-10">
              <h2 className="text-2xl mb-4">Senior Worker Nominations</h2>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4">Image</th>
                    <th className="py-2 px-4">Name</th>
                    <th className="py-2 px-4">Choice</th>
                    <th className="py-2 px-4">Nominate</th>
                  </tr>
                </thead>
                <tbody>
                  {workers.map((worker) => (
                    <tr key={worker.id} className="even:bg-gray-100">
                      <td className="py-2 px-4"></td>
                      <td className="py-2 px-4">{worker.name}</td>
                      <td className="py-2 px-4">
                        <select
                          className="border rounded px-2 py-1"
                          value={selectedChoices[worker.id] || ""}
                          onChange={(e) => handleSelectChange(worker.id, e.target.value)}
                          disabled={isWorkerDisabled(worker.id)}
                        >
                          <option value="" disabled>
                            Select Choice
                          </option>
                          <option value="First Choice" disabled={isChoiceDisabled("First Choice")}>
                            First Choice
                          </option>
                          <option value="Second Choice" disabled={isChoiceDisabled("Second Choice")}>
                            Second Choice
                          </option>
                          <option value="Third Choice" disabled={isChoiceDisabled("Third Choice")}>
                            Third Choice
                          </option>
                        </select>
                      </td>
                      <td className="py-2 px-4">
                        <button
                          className="bg-blue-500 text-white py-1 px-3 rounded-full"
                          onClick={() => handleSelectChange(worker.id, selectedChoices[worker.id])}
                          disabled={isWorkerDisabled(worker.id)}
                        >
                          Nominate
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-full fixed bottom-4 right-4 z-20"
                onClick={handleSubmit}
              >
                Submit
              </button>
              {submitted && (
                <div className="fixed bottom-20 right-4 bg-green-500 text-white py-2 px-4 rounded-full z-20">
                  Nomination choices are received successfully.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Senior;
