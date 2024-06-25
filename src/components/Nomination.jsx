import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchWorkers from "./Hooks/useFetchWorkers";
import Sidebar from "./Sidebar";
import api from '../api';

const Nomination = ({ user }) => {
  const { category } = useParams();
  const { data: workers, isError, error, isLoading } = useFetchWorkers(category);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [stagedNominations, setStagedNominations] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [nominatedWorker, setNominatedWorker] = useState(null);
  const navigate = useNavigate();

  const handleSelectChange = (workerId, choice) => {
    setSelectedChoices((prevChoices) => {
      const updatedChoices = { ...prevChoices };

      for (let id in updatedChoices) {
        if (updatedChoices[id] === choice) {
          delete updatedChoices[id];
        }
      }

      updatedChoices[workerId] = choice;
      return updatedChoices;
    });
  };

  const handleNominate = async (workerId) => {
    const choice = selectedChoices[workerId];
    if (!choice) {
      alert("Please select a choice before nominating.");
      return;
    }

    const weight = choice === "First Choice" ? 3 : choice === "Second Choice" ? 2 : 1;

    try {
      // Stage the nomination
      const response = await api.post(
        "/nominations/",
        {
          nominee_id: workerId,
          category,
          weight,
        },
      );
      setStagedNominations((prevNominations) => [
        ...prevNominations,
        { nominee_id: workerId, category, weight, id: response.data.id },
      ]);
      setNominatedWorker(workerId);
      setTimeout(() => setNominatedWorker(null), 2000); // Clear feedback after 2 seconds
    } catch (err) {
      console.error("Error staging nomination", err);
      alert("Error staging nomination");
    }
  };

  const handleSubmit = async () => {
    if (Object.keys(selectedChoices).length !== 3) {
      alert("Please select exactly three choices before submitting.");
      return;
    }

    try {
      // Submit the staged nominations to the backend
      await api.post(
        "/commit-nominations/",
        stagedNominations,
      );
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting nominations", err);
      alert("Error submitting nominations");
    }
  };

  const isChoiceDisabled = (workerId, choice) => {
    return (
      Object.values(selectedChoices).includes(choice) &&
      selectedChoices[workerId] !== choice
    );
  };

  const getCategoryHeading = (category) => {
    switch (category) {
      case 'senior':
        return 'Nomination of Senior Staff';
      case 'administrative':
        return 'Nomination of Administrative Staff';
      case 'junior':
        return 'Nomination of Junior Staff';
      default:
        return 'Nomination';
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl">{getCategoryHeading(category)}</h1>
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
            <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workers.map((worker) => (
                <div key={worker.id} className="bg-white shadow-lg rounded-lg p-4">
                  <img
                    src={`https://via.placeholder.com/150`} // Placeholder image URL
                    alt={worker.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-center mb-2">{worker.name}</h3>
                  <div className="text-center mb-4">
                    <select
                      className="border rounded px-2 py-1 w-full"
                      value={selectedChoices[worker.id] || ""}
                      onChange={(e) => handleSelectChange(worker.id, e.target.value)}
                    >
                      <option value="" disabled>
                        Select Choice
                      </option>
                      <option value="First Choice" disabled={isChoiceDisabled(worker.id, "First Choice")}>
                        First Choice
                      </option>
                      <option value="Second Choice" disabled={isChoiceDisabled(worker.id, "Second Choice")}>
                        Second Choice
                      </option>
                      <option value="Third Choice" disabled={isChoiceDisabled(worker.id, "Third Choice")}>
                        Third Choice
                      </option>
                    </select>
                  </div>
                  <button
                    className={`w-full py-2 px-4 rounded-full ${selectedChoices[worker.id] ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    onClick={() => handleNominate(worker.id)}
                    disabled={!selectedChoices[worker.id]}
                  >
                    {nominatedWorker === worker.id ? "Nominated!" : "Nominate"}
                  </button>
                </div>
              ))}
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

export default Nomination;
