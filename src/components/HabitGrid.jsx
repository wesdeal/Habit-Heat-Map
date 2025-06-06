import React from "react";
import './HabitGrid.css'
import { useState, useRef } from "react";


// Removed handleHabit from here; it will be defined inside HabitGrid


export default function HabitGrid() {
  const dateObj = new Date();
  const date = dateObj.toString();

  let days;
  if (dateObj.getMonth() === 0) { // January is 0
    days = 31;
  }
  else if (dateObj.getMonth() === 1) { // February is 1
    days = 28; // Not accounting for leap years
  }
  else if (dateObj.getMonth() === 2) { // March is 2
    days = 31;
  }
  else if (dateObj.getMonth() === 3) { // April is 3
    days = 30;
  }
  else if (dateObj.getMonth() === 4) { // May is 4
    days = 31;
  }
  else if (dateObj.getMonth() === 5) { // June is 5
    days = 30;
  }
  else if (dateObj.getMonth() === 6) { // July is 6
    days = 31;
  }
  else if (dateObj.getMonth() === 7) { // August is 7
    days = 31;
  }
  else if (dateObj.getMonth() === 8) { // September is 8
    days = 30;
  }
  else if (dateObj.getMonth() === 9) { // October is 9
    days = 31;
  }
  else if (dateObj.getMonth() === 10) { // November is 10
    days = 30;
  }
  else if (dateObj.getMonth() === 11) { // December is 11
    days = 31;
  }
  

  const length = days;


  /* State Variables */
  const [track, setTrack] = useState(Array(length).fill(false));
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  const[opacity, setOpacity] = useState(0);


  let today = dateObj.getDate();

  
  const [isToggled, setIsToggled] = useState(false);
  function handleToggle() {
    handleHabit();
    setIsToggled(!isToggled)
  
  }
  function handleHabit() {
    const newTrack = [...track];
    newTrack[today - 1] = !isToggled;
    setTrack(newTrack);
  }

  function handleAddHabit() {
    setHabits([...habits, newHabit]);
    console.log(habits);
    setNewHabit("");
  }

  return (
       <div className="">
        <h2>{date}</h2>
        
        <div className="grid-container">
          {[...Array(length)].map((_, i) => (
            <button style={{ backgroundColor: track[i] ? "green" : "antiquewhite"}} id="dayButton" key={i}>{i + 1}</button>
          ))}
        </div>
        
        <div className="habits">

          {[...Array(habits.length)].map((_, j) => (
            <React.Fragment key={j}>
              <input type="checkbox" id={`habitCheckbox-${j}`} onChange={handleToggle} />
              <label htmlFor={`habitCheckbox-${j}`}>{habits[j]}</label>
            </React.Fragment>
          ))}
        </div>

        <div className="addHabit">
          <input value={newHabit} onChange={(e) => setNewHabit(e.target.value)} placeholder="New habit..."/>
          <button onClick={handleAddHabit}>Add</button>
        </div>

    </div>
  );
}



/* Ideas:

 - for how green each box is:
      divide the number of habits by 100, that will be the % opacity of green that will be added for each habit checked off

*/