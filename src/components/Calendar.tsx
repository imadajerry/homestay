import React from "react";
import "./Calendar.css";

import { getFullCalendarGrid } from "../util/FullCalendarGrid";

type CalendarProps = {
  onDaySelect?: (day: Date) => void;
};

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const Calendar: React.FC<CalendarProps> = ({ onDaySelect = () => {} }) => {
  const [viewDate, setViewDate] = React.useState(new Date());

  const dayGrid = getFullCalendarGrid(
    viewDate.getFullYear(),
    viewDate.getMonth()
  );

  const monthName = viewDate.toLocaleString("default", { month: "long" });

  const prevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1));
  };

  return (
    <div className="Calendar">
      <div className="month-select flex space-between">
        <button className="btn" onClick={prevMonth}>
          &lt;Prev
        </button>
        <span className="month-name font-lg">{monthName}</span>
        <button className="btn" onClick={nextMonth}>
          Next&gt;
        </button>
      </div>
      <div>
        <div className="week-names font-sm flex space-around">
          {weekdays.map((days, daysI) => <span key={daysI}>{days}</span>)}
        </div>
        <div className="month-days grid gap-m">
          {dayGrid.map((week, wIndex) => (
            <div
              key={wIndex}
              className="week grid grid-week justify-center gap-m"
            >
              {week.map((day, dIndex) => (
                <div
                  className={`day ${
                    day.getMonth() !== viewDate.getMonth() ? "day--outside" : ""
                  }`}
                  key={`${wIndex}-${dIndex}`}
                  onClick={() => onDaySelect(day)}
                >
                  <span>
                    {day.toLocaleString("default", { day: "numeric" })}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
