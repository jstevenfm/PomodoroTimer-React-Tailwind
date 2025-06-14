import { useEffect, useState } from "react";

import BtnTimerControls from "../../ui/BtnTimerControls";

const TimerControls = ({
  setTimer,
  status,
  currentStatus,
  setCurrentStatus,
  isActive,
  setIsActive
}) => {
  const [counterPomodoro, setCounterPomodoro] = useState(0);

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
            setTimeout(() => {
              nextState();
            }, 0);
          }

          return { minutes, seconds };
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isActive, setTimer, currentStatus]);

  const nextState = () => {
    if (currentStatus === "pomodoro") {
      if (counterPomodoro < 3) {
        setCurrentStatus("short-break");
        setTimer(status[1].timer);
        setCounterPomodoro(counterPomodoro + 1);
        const statusInput = document.getElementById("short-break");
        statusInput ? statusInput.checked = true : null;
      }
      if (counterPomodoro === 3) {
        setCurrentStatus("long-break");
        setTimer(status[2].timer);
        setCounterPomodoro(0);
        const statusInput = document.getElementById("long-break");
        statusInput ? statusInput.checked = true : null;
      }
    } else if (currentStatus === "short-break" || currentStatus === "long-break") {
      setCurrentStatus("pomodoro");
      setTimer(status[0].timer);
      const statusInput = document.getElementById("pomodoro");
      statusInput ? statusInput.checked = true : null;
    }
    setIsActive(false);
  };

  const handleTimer = (e) => {
    const btn = e.currentTarget.title;
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
        break;
      default:
        break;
    }
  };

  const stylesComponent =
    currentStatus === "pomodoro"
      ? "bg-golden-sand-200"
      : currentStatus === "short-break"
      ? "bg-ziggurat-200"
      : "bg-cruise-200"

  return (
    <div className={`max-w-72 px-0.5 grid grid-cols-3 justify-items-center rounded-4xl shadow-sm ${stylesComponent}`}>
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
