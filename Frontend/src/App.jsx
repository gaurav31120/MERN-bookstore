// import React from 'react'

import Courses from "./courses/Courses";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home />
    <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
