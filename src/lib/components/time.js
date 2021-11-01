import React from "react";
import moment from "moment-jalaali";
import { useState, useEffect } from "react";
import "./box-slider-time.css";

moment.loadPersian({ usePersianDigits: true, dialect: "persian-modern" });

export default function Showtime({
  timeStyle = {},
  dateStyle = {},
  showDate = false,
  showTime = false,
  classNametimeanddate = "",
}) {
  const [day, setDay] = useState("01");
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("1400");
  const [time, setTime] = useState("00:00:00");

  const changeDate = () => {
    let m = moment();
    setTime(m.format("HH:mm:ss"));
    setDay(m.format(" jDD dddd "));
    setMonth(m.format(" jMMMM / "));
    setYear(m.format(" jYYYY / "));
    window.setTimeout(() => changeDate(), 1000);
  };

  useEffect(() => {
    changeDate();
  }, []);

  if (showTime === true || showDate === true) {
    return (
      <div className={`box-slider-datetime ${classNametimeanddate}`}>
        {showTime && (
          <div className="box-slider-datetime-time" style={timeStyle}>
            {time}
          </div>
        )}
        {showDate && (
          <div className="box-slider-datetime-date" style={dateStyle}>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
}
