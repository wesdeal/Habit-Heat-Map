import React from "react";
import './HabitGrid.css'
import { useState, useRef } from "react";
import Grid from "./Grid";
import Habits from "./Habits";
import useHabits from "./useHabits";


// Removed handleHabit from here; it will be defined inside HabitGrid


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
    handleHabit,
    handleAddHabit
  } = useHabits(daysInMonth)

  return (
       <div className="">
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



/* Ideas:

 - for how green each box is:
      divide the number of habits by 100, that will be the % opacity of green that will be added for each habit checked off

*/