import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HabitGrid from './components/HabitGrid';

function App() {
  return (
    <div className="App">
      <h1>Habit Tracker App</h1>
      <HabitGrid></HabitGrid>
    </div>
  
  );
}

export default App;
