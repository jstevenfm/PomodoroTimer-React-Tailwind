import { useState } from "react";

import TimerStatus from "./TimerStatus";
import TimerCounter from "./TimerCounter";
import TimerControls from "./TimerControls";

const TimerContainer = () => {
  const status = [
    {
      id: "pomodoro",
      text: "Pomodoro",
      timer: { minutes: 25, seconds: 0 },
      defaultChecked: true,
    },
    {
      id: "short-break",
      text: "Short Break",
      timer: { minutes: 5, seconds: 0 },
      defaultChecked: false,
    },
    {
      id: "long-break",
      text: "Long Break",
      timer: { minutes: 15, seconds: 0 },
      defaultChecked: false,
    },
  ];

  const [timer, setTimer] = useState(status[0].timer);
  const [currentStatus, setCurrentStatus] = useState(status[0].id);
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center my-14 mx-auto">
      <TimerStatus setTimer={setTimer} status={status} setCurrentStatus={setCurrentStatus} setIsActive={setIsActive} />
      <TimerCounter minutes={timer.minutes} seconds={timer.seconds} />
      <TimerControls
        setTimer={setTimer}
        status={status}
        currentStatus={currentStatus}
        setCurrentStatus={setCurrentStatus}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </section>
  );
};

export default TimerContainer;
