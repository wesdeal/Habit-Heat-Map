import React from "react";
import './HabitGrid.css'
import Grid from "./Grid";
import Habits from "./Habits";
import useHabits from "./useHabits";
import Navbar from "./Navbar";


export default function HabitGrid() {
  const dateObj = new Date();
  const date = dateObj.toString();
  const daysInMonth = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0).getDate();
  /* days in month, used to fill arrays tracking all the days */
  // Removed useHabits destructuring to avoid redeclaration error

  /* State Variables */
  const {
    habits,
    setHabits,
    count,
    checkedState,
    newHabit,
    setNewHabit,
    handleHabit,/* what happens when you mark a habit as completed */
    handleAddHabit /* what happens when you click 'add' */
  } = useHabits(daysInMonth)

  return (

       <div className="">
        <Navbar/>
        <h2>{date}</h2>
        
        <Grid habits={habits} count={count} length={daysInMonth} />
        <Habits habits={habits} length={daysInMonth} handleHabit={handleHabit} checkedState={checkedState}/>

        <div className="addHabit">
          <input className="habit-input" value={newHabit} onChange={(e) => setNewHabit(e.target.value)} placeholder="New habit..."/>
          <button className="habit-btn" onClick={handleAddHabit}>Add</button>
        </div>

      </div>
  );



}
