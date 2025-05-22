import { useEffect, useState } from "react";

import BtnTimerControls from "../../ui/BtnTimerControls";

const TimerControls = ({
  setTimer,
  status,
  currentStatus
}) => {
  const [isActive, setIsActive] = useState(false);

  const controls = [
    {
      title: "Reset",
      className: "",
    },
    {
      title: "Start",
      className: isActive ? "hidden" : "",
    },
    {
      title: "Pause",
      className: isActive ? "" : "hidden",
    },
    {
      title: "Next State",
      className: "",
    },
  ];

  const resetTimer = () => {
    setIsActive(false);
    switch (currentStatus) {
      case 'pomodoro':
        setTimer(status[0].timer)
        break
      case 'short-break':
        setTimer(status[1].timer)
        break
      case 'long-break':
        setTimer(status[2].timer)
        break
    }
  };

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
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
        break;
      case "Pause":
        setIsActive(false);
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
          className={control.className}
        />
      ))}
    </div>
  );
};

export default TimerControls;
