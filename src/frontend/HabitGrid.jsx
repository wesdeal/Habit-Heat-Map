import React from "react";
import './HabitGrid.css'
import Grid from "./Grid";
import Habits from "./Habits";
import useHabits from "./useHabits";
import Navbar from "./Navbar";


export default function HabitGrid() {
  const dateObj = new Date();
  const date = dateObj.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const daysInMonth = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0).getDate();

  const {
    habits,
    setHabits,
    count,
    checkedState,
    newHabit,
    setNewHabit,
    handleHabit,
    handleAddHabit
  } = useHabits(daysInMonth)

  return (
    <div className="habit-app">
      <Navbar/>
      <div className="date-header">
        <h2>{date}</h2>
      </div>
      
      <Grid habits={habits} count={count} length={daysInMonth} />
      
      <div className="addHabit">
        <input 
          className="habit-input" 
          value={newHabit} 
          onChange={(e) => setNewHabit(e.target.value)} 
          placeholder="Add a new habit..."
        />
        <button className="habit-btn" onClick={handleAddHabit}>Add</button>
      </div>
      
      <Habits habits={habits} length={daysInMonth} handleHabit={handleHabit} checkedState={checkedState}/>
    </div>
  );
}
