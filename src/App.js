import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import HabitGrid from './frontend/HabitGrid';
import SignUp from './frontend/SignUp';

import SignIn from './frontend/SignIn';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HabitGrid/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
