import React, { useState } from "react";
import {   Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./components/home";
import Login from "./components/login";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./components/Dashboard";
import Selection from "./components/Selection";
import Result from "./components/Result";
import Nomination from "./components/Nomination";
import Vote from "./components/Vote";
import Administrative from "./components/Administrative";
import Junior from "./components/Junior";
import Senior from "./components/Senior";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {

  return (
    <div className="App">
      <ReactQueryDevtools initialIsOpen={false} />
    
       
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Dashboard" element={<DashboardPage />} />
              <Route path="/Selection" element={<Selection />} />
              <Route path="/Nomination/:category" element={<Nomination />} />
              <Route path="/Sidebar" element={<Sidebar />} />
              <Route path="/Junior" element={<Junior />} />
              <Route path="/Administrative" element={<Administrative/>} />
              <Route path="/Senior" element={<Senior />} />
              <Route path="/Vote" element={<Vote />} />
              <Route path="/Result" element={<Result />} />
            </Routes>
          </div>
        
      
   
  );
};

export default App;
