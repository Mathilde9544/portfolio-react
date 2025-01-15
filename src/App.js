import React from "react";
import Home from './Home';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Resume from "./Resume";
import Gardenease from "./gardenease/Gardenease.js";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/gardenease" element={<Gardenease />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
