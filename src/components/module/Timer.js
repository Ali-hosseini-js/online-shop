import React, { useState, useEffect } from "react";
import { e2p } from "@/utils/replaceNumber";

const CountdownTimer = ({ date, time }) => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const pad = (n) => (n < 10 ? `0${n}` : n);

  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const [year, month, day] = date.split("-");
    const [hours, minutes] = time ? time.split(":") : [0, 0];
    const futureDate = new Date(year, month - 1, day, hours, minutes);
    const seconds = (futureDate.getTime() - currentDate.getTime()) / 1000;

    if (seconds <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(seconds / 86400);
    const hoursLeft = Math.floor((seconds % 86400) / 3600);
    const minutesLeft = Math.floor((seconds % 3600) / 60);
    const secondsLeft = Math.floor(seconds % 60);

    return {
      days,
      hours: hoursLeft,
      minutes: minutesLeft,
      seconds: secondsLeft,
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [date, time]);

  return (
    <div className="flex justify-center text-center bg-white rounded-xl p-2">
      <div className="flex flex-col items-center px-1">
        <span className="timer">{e2p(pad(remainingTime.seconds))}</span>
        <span className="timer-day">ثانیه</span>
      </div>
      <div className="flex flex-col items-center px-1 border-r-[1px] border-main">
        <span className="timer">{e2p(pad(remainingTime.minutes))}</span>
        <span className="timer-day">دقیقه</span>
      </div>
      <div className="flex flex-col items-center px-1 border-r-[1px] border-main">
        <span className="timer">{e2p(pad(remainingTime.hours))}</span>
        <span className="timer-day">ساعت</span>
      </div>
      {remainingTime.days > 0 && (
        <div className="flex flex-col items-center px-1 border-r-[1px] border-main">
          <span className="timer">{e2p(pad(remainingTime.days))}</span>
          <span className="timer-day">روز</span>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
