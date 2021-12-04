import "./assets/css/vendor.css";
import "./assets/css/style-azalea.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

import Home from "./Home";

function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;
