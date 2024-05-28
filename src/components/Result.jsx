import React from "react";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import { Bar } from "react-chartjs-2"; // Import the Bar chart component
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Result= () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Votes',
        data: [65, 59, 80, 81],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true, // Enable responsiveness for the chart
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Votes',
      },
    },
  };

  return (
    <div className="Result flex flex-col min-h-screen"> {/* Main container */}
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

      <div className="flex flex-1"> {/* Content container */}
        <Sidebar /> {/* Sidebar */}

        <main className="flex-1 p-4 overflow-y-auto"> {/* Main content area */}
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

          {/* Chart */}
          <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
            <h3 className="text-xl font-bold mb-4">Total Votes</h3>
            <Bar data={data} options={options} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Result;
