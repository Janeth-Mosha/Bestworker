import React from "react";
import { Link } from "react-router-dom";
function home() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/cover.jpeg')" }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-75">
        <h1 className="text-4xl font-bold text-white mb-8">
          UDSM Best Worker Selection System
        </h1>
        <Link to="/login">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
export default home;
