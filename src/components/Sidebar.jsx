import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nomination from "./Nomination";


const Sidebar = ({ setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNominationOpen, setIsNominationOpen] = useState(false);
  const [isVoteOpen, setIsVoteOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleNomination = () => {
    setIsNominationOpen(!isNominationOpen);
  };

  const toggleVote = () => {
    setIsVoteOpen(!isVoteOpen);
  };

  return (
    <div>
      {/* Sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 text-white bg-blue-500 fixed top-4 left-4 z-20"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`bg-blue-500 text-black h-screen w-64 flex flex-col justify-between fixed lg:static transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="mt-8">
          <ul>
          <li>
            <Link
                to="/Dashboard"
                className="flex items-center py-2 px-4 text-white hover:bg-gray-700"
              >
                <i className="bi bi-bar-chart mr-2"></i> Dashboard
              </Link>
            </li>

            <li>
            <Link
                to="/Selection"
                className="flex items-center py-2 px-4 text-white hover:bg-gray-700"
              >
                <i className="bi bi-bar-chart mr-2"></i> Selection
              </Link>
              </li>

              <li>
              <div
                className="flex items-center py-2 px-4 text-white hover:bg-gray-700 cursor-pointer"
                onClick={toggleNomination}
              >
                <i className="bi bi-pencil-square mr-2"></i> Nominations
              </div>
              {isNominationOpen && (
                <ul className="pl-8">
                  <Link to="/Administrative">
                  <li>
                    <div
                      className="flex items-center py-2 px-4 text-white hover:bg-gray-700 cursor-pointer"
  
                      
                    >
                      Administrative
                    </div>
                  </li></Link>
                  <li>
                    <Link to="/Junior">

                    <div
                      className="flex items-center py-2 px-4 text-white hover:bg-gray-700 cursor-pointer"
                    
                    >
                      Junior
                    </div>
                    </Link>
                    
                  </li>
                  <Link to="/Senior">
                  <li>
                    <div
                      className="flex items-center py-2 px-4 text-white hover:bg-gray-700 cursor-pointer"
                    
                    >
                      Senior
                    </div>
                  </li></Link>
                </ul>
              )}
            </li>

            <li>
              <div
                className="flex items-center py-2 px-4 text-white hover:bg-gray-700 cursor-pointer"
                onClick={toggleVote}
              >
                <i className="bi bi-award mr-2"></i> Vote
              </div>
              {isVoteOpen && (
                <ul className="pl-8">
                  <li>
                    <div
                      className="flex items-center py-2 px-4 text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => setCategory("administrative")}
                    >
                      Administrative
                    </div>
                  </li>

                  <li>
                    <div
                      className="flex items-center py-2 px-4 text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => setCategory("junior")}
                    >
                      Junior
                    </div>
                  </li>

                  <li>
                    <div
                      className="flex items-center py-2 px-4 text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => setCategory("senior")}
                    >
                      Senior
                    </div>
                  </li>
                </ul>
              )}
            </li>

            <li>
            <Link
                to="/Result"
                className="flex items-center py-2 px-4 text-white hover:bg-gray-700"
              >
                <i className="bi bi-bar-chart mr-2"></i> Results
              </Link>
            </li>

          </ul>
         
        </div>
      </div>
    </div>
   
            );
 
};

export default Sidebar;