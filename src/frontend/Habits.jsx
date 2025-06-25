import React from "react";

export default function Habits({ habits, handleHabit, checkedState }) {


    return(
        <div className="habits">
        
            {[...Array(habits.length)].map((_, j) => (
            <React.Fragment key={j}>
                <input type="checkbox" id={`habitCheckbox-${j}`} checked={checkedState[j] || false } onChange={() => handleHabit(j)} />
                <label htmlFor={`habitCheckbox-${j}`}>{habits[j]}</label>
            </React.Fragment>
            ))}
            
        </div>
    )
};


/* Down the line updates: use useEffect instead of useState for checkedState so that checkedState always matches length of habits; no catch-up */