import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HabitGrid from './frontend/HabitGrid';

function App() {
  return (
    <div className="App">
      <h1>Welcome to your Habit Home.</h1>
      <HabitGrid></HabitGrid>
    </div>
  
  );
}

export default App;
