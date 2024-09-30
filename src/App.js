import React, { useState } from "react";
import "./App.css";
import Main from "./App/Main";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import About from './App/about'
import Work from "./App/Work";
import CaseStudyPage from "./App/caseStudyMain";



function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/test" element={<CaseStudyPage />} />
          <Route path="/about" element={<About />} />
          <Route exact path="case-study/:id" element={<CaseStudyPage/>} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route exact path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
