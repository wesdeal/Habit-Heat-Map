import { useState } from "react";
import supabase from '../supabaseClient'


export default function useHabits(length) {
      /* State Variables */
      const [count, setCount] = useState(Array(length).fill(0)); /* [0,0,0,0,0,0,0,0] count for each day*/
      const [habits, setHabits] = useState([]); /* array to hold all habits that get added */
      const [newHabit, setNewHabit] = useState(""); /* habit that is created and added by user */
    

      const dateObj_2 = new Date();
    
      let today = dateObj_2.getDate();
    
      
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
        /* console.log("opacity: ", opacity);
        console.log("# of checks on given day: ", count[today-1] );
        console.log("Count array: ", count); */
      }
    
    
    
    
      async function handleAddHabit() {
        setCheckedState([...checkedState, false]); /* copy array and append a false to it */

        setHabits([...habits, newHabit]);

        const {data, error} = await supabase 
            .from('Habits')
            .insert([{user_id: '623849f5-6392-4b88-85d6-bedd2c1c21da', name: newHabit}])

        setNewHabit("");

        if (error) {
            console.error("Insert error:", error.message);
            } else {
            console.log("Insert success:", data);
            }
        }


      return{
        habits,
        setHabits,
        count,
        checkedState,
        newHabit,
        setNewHabit,
        handleHabit,
        handleAddHabit
      };
};