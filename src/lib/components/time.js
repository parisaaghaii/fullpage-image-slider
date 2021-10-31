import React from "react";
import moment from "moment-jalaali";
import { useState, useEffect } from "react";
import "./box-slider-time.css";

moment.loadPersian({ usePersianDigits: true, dialect: "persian-modern" });

export default function Showtime() {
  const [day, setDay] = useState("01");
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("1400");
  const [time, setTime] = useState("00:00:00");

  const changeDate = () => {
    let m = moment();
    setTime(m.format("HH:mm:ss"));
    setDay(m.format("jDD"));
    setMonth(m.format("jMMMM"));
    setYear(m.format("jYYYY"));
    window.setTimeout(() => changeDate(), 1000);
  };

  useEffect(() => {
    changeDate();
  }, []);

  return (
    <div className="box-slider-datetime">
      <div className="box-slider-datetime-time">{time}</div>
      {/* <div style={{  }}>
        <div className="box-slider-datetime-day">{day}</div>
        <div className="box-slider-datetime-month">{month}</div>
        <div className="box-slider-datetime-year">{year}</div>
      </div> */}

      <div className="box-slider-datetime-year">
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
    </div>
  );
}
