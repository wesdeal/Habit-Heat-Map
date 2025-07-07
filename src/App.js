import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import HabitGrid from './frontend/HabitGrid';

import SignUp from './frontend/SignUp';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HabitGrid/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
