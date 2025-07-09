 // Component to render calendar days that get tracked

export default function Grid( { habits, count, length } ) {


    return(
        <tr className="grid-container">
          {[...Array(length)].map((_, i) => {


            const dayOpacity = habits.length === 0 ? 0 : count[i] / habits.length; 
            
            /* calculate opacity for the day based on habitschecked and # of total habits */
            return (
              <td 
                style={{ backgroundColor: `rgba(0, 128, 0, ${dayOpacity})` }} id="dayButton" key={i}>{i + 1}</td>
            );


          })}   
        </tr>
    )
};