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
  
  
  const length = days; /* days in month, used to fill arrays tracking all the days */


  /* State Variables */
  const [count, setCount] = useState(Array(length).fill(0)); /* [0,0,0,0,0,0,0,0] count for each day*/
  const [habits, setHabits] = useState([]); /* array to hold all habits that get added */
  const [newHabit, setNewHabit] = useState(""); /* habit that is created and added by user */

  const[opacity, setOpacity] = useState(0);


  let today = dateObj.getDate();

  
  const [checkedState, setCheckedState] = useState([]); /* boolean array, keeps track of each habit, whether its checked off or not */
  console.log(checkedState)

  function handleToggle(j) {
    
    const newCheckedState = [...checkedState];
    
    newCheckedState[j] = !newCheckedState[j];
    
    setCheckedState(newCheckedState);
    
    handleHabit(j);
  }



  function handleHabit(j) {
    console.log("first number of checks:", count[today -1 ])
    const newCheckedState = [...checkedState];
    newCheckedState[j] = !newCheckedState[j];
    const newCount = [...count];
    console.log("Boolean before if statement: ", newCheckedState[j]);
    /* console.log("index for habit clicked: ", j) */
    if (newCheckedState[j] === true) {
      newCount[today - 1] += 1;
    } 
    if (newCheckedState[j] === false) {
      newCount[today - 1] -= 1;
    }

    setCount(newCount);
    console.log("# of checks on given day: ", newCount[today-1] );
    setCheckedState(newCheckedState);

    setOpacity(newCount[today - 1] / habits.length);
    /* console.log("opacity: ", opacity);
    console.log("# of checks on given day: ", count[today-1] );
    console.log("Count array: ", count); */
  }




  function handleAddHabit() {

    setCheckedState([...checkedState, false]); /* copy array and append a false to it */


    setHabits([...habits, newHabit]);
    console.log(habits);
    setNewHabit("");
  }

  return (
       <div className="">
        <h2>{date}</h2>
        
        <div className="grid-container">
          {[...Array(length)].map((_, i) => {
            const dayOpacity = habits.length === 0 ? 0 : count[i] / habits.length; /* calculate opacity for the day based on habitschecked and # of total habits */
            return (
              <td 
                style={{ backgroundColor: `rgba(0, 128, 0, ${dayOpacity})` }} id="dayButton" key={i}>{i + 1}</td>
            );
          })}   
        </div>
        
        <div className="habits">

          {[...Array(habits.length)].map((_, j) => (
            <React.Fragment key={j}>
              <input type="checkbox" id={`habitCheckbox-${j}`} checked={checkedState[j]} onChange={() => handleHabit(j)} />
              <label htmlFor={`habitCheckbox-${j}`}>{habits[j]}</label>
            </React.Fragment>
          ))}
        </div>

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