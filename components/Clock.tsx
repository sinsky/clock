"use client";

import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const slicer = (n: number) => ("00" + n).slice(-2);

  const dateString = `${time.getFullYear()}/${slicer(
    time.getMonth() + 1
  )}/${slicer(time.getDate())}`;
  const dayString = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    time.getDay()
  ];
  const timeString =
    slicer(time.getHours()) +
    ":" +
    slicer(time.getMinutes()) +
    ":" +
    slicer(time.getSeconds());

  return (
    <div className="flex flex-col text-center">
      <div className="text-3xl font-bold p-3">
        {dateString} ({dayString})
      </div>
      <div className="text-9xl font-bold">{timeString}</div>
    </div>
  );
};

export default Clock;
