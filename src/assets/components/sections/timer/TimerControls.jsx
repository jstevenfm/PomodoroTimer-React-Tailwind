import { useEffect, useState } from "react";

import BtnTimerControls from "../../ui/BtnTimerControls";

const TimerControls = ({ timer, setTimer }) => {
  const [isActive, setIsActive] = useState(false);

  const controls = [
    { title: "Reset" },
    { title: "Start" },
    { title: "Next State" },
  ];

  const actualTimerStatus = {
    minutes: timer.minutes,
    seconds: timer.seconds,
  };

  const resetTimer = () => {
    setTimer(actualTimerStatus);
    // console.log("Reset Timer", actualTimerStatus.minutes, actualTimerStatus.seconds);
  };

  useEffect(() => {
    if (isActive) {
      let interval = setInterval(() => {
        setTimer((prevTime) => {
          let { minutes, seconds } = prevTime;

          seconds -= 1;
          if (seconds < 0) {
            seconds = 59;
            minutes -= 1;
          }
          if (minutes < 0) {
            clearInterval(interval);
            nextState();
          }

          return { minutes, seconds };
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isActive, setTimer]);

  const nextState = () => {};

  const handleTimer = (e) => {
    const btn = e.target.innerText;
    switch (btn) {
      case "Reset":
        resetTimer();
        break;
      case "Start":
        setIsActive(true);
        console.log("Start Timer", timer.minutes, timer.seconds);
        break;
      case "Next State":
        nextState();
        console.log("Next State");
        break;
      default:
        break;
    }
  };

  return (
    <div className="py-2 px-5 w-3/4 max-w-72 grid grid-cols-3 justify-items-center bg-yellow-100 rounded-3xl shadow-sm">
      {controls.map((control) => (
        <BtnTimerControls
          key={control.title}
          title={control.title}
          onclick={handleTimer}
        />
      ))}
    </div>
  );
};

export default TimerControls;
