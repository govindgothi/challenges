import React, { useState } from "react";
import "./LeapYear.css";

export default function LeapYear() {
  const [year, setYear] = useState("");
  const [isLeapYear, setIsLeapYear] = useState(null);
  const handleCheckLeapYear = () => {
    const yr = parseInt(year);
    if ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0) {
      setIsLeapYear(true);
      setTimeout(() => {
        setIsLeapYear(null);
      }, 3000);
    } else {
      setIsLeapYear(false);
      setTimeout(() => {
        setIsLeapYear(null);
      }, 3000);
    }
  };
  return (
    <div className="cont">
      <div className="container flex flex-col gap-2 items-center">
        <h1>Leap Year Checker</h1>
        <label data-testid="label-date">Enter a year:</label>
        <input
          value={year}
          type="text"
          onChange={(e) => setYear(e.target.value)}
          data-testid="year-input"
        />

        {isLeapYear !== null && (
          <p className="mt-2 bg-green-400 w-36 rounded-xl px-2 py-1 shadow shadow-gray-500 shodow-2xl">
            {isLeapYear == true ? "Leap Year" : "Not a Leap Year"}
          </p>
        )}
        <button onClick={handleCheckLeapYear} data-testid="check-btn">
          Check
        </button>
      </div>
    </div>
  );
}
