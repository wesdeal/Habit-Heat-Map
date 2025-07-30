import React from 'react';
import './HabitGrid.css';

// GitHub-style green shades
const LEVELS = [
  '#161b22',
  '#0e4429',
  '#006d32',
  '#26a641',
  '#39d353'
];

function getColor(opacity) {
  if (opacity === 0) return LEVELS[0];
  if (opacity < 0.25) return LEVELS[1];
  if (opacity < 0.5) return LEVELS[2];
  if (opacity < 0.75) return LEVELS[3];
  return LEVELS[4];
}

export default function Grid({ habits, count, length }) {
  return (
    <div className="grid-container">
      {Array.from({ length }).map((_, i) => {
        const dayOpacity = habits.length ? count[i] / habits.length : 0;
        return (
          <div
            key={i}
            id="dayButton"
            data-day={`Day ${i + 1}`}
            title={`${count[i]} habit${count[i] !== 1 ? 's' : ''}`}
            style={{ backgroundColor: getColor(dayOpacity) }}
          />
        );
      })}
    </div>
  );
}