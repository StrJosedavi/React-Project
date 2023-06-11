import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './index.css';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path = "/" element={ <Login /> }/> */}
        {/* <Route path = "/home" element={ <Home /> }/> */}
      </Routes>
    </Router>
  );
}

export default App;