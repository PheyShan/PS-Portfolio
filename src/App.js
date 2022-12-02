import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
// import Navbar from "./components/Navbar";
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
