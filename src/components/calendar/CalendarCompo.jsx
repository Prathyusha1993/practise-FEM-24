import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarCompo = () => {
  const [value, setValue] = useState(new Date());

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
        width: "100%",
      }}
    >
      <Calendar onChange={onChange} value={value} className="react-calendar" />
    </div>
  );
};

export default CalendarCompo;
