import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import Home from './components/home'
import Login from './components/login'
import Sidebar from './components/Sidebar';
import Side from './components/Side';
import DashboardPage from './components/Dashboard';
import Selection from './components/Selection';
import Nomination from './components/Nomination';
import Vote from './components/Vote';
import Administrative from './components/Administrative'
function App() {
  return (
    <div className="App">
       
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/LOGIN" element={<Login />} />
        <Route path="/Side" element={<Sidebar/>} />
        <Route path="/Sidetwo" element={<Side/>} />
        <Route path="/Dashboard" element={<DashboardPage/>} />
        <Route path="/Selection" element={<Selection/>} />
        <Route path="/Nomination" element={<Nomination/>} />
        <Route path="/Administrative" element={<Administrative/>} />
        <Route path="/Vote" element={<Vote/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
