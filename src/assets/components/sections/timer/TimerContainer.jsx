import { useState } from "react";

import TimerStatus from "./TimerStatus";
import TimerCounter from "./TimerCounter";
import TimerControls from "./TimerControls";

const TimerContainer = () => {
  const [timer, setTimer] = useState({
    minutes: 25,
    seconds: 0,
  });

  const status = [
    {id: 'pomodoro', text: 'Pomodoro', defaultChecked: true},
    {id: 'short-break', text: 'Short Break', defaultChecked: false},
    {id: 'long-break', text: 'Long Break', defaultChecked: false}
  ]

  return (
    <section className="flex flex-col items-center justify-center my-14 mx-auto">
      <TimerStatus setTimer={setTimer} status={status} />
      <TimerCounter minutes={timer.minutes} seconds={timer.seconds} />
      <TimerControls setTimer={setTimer} status={status} />
    </section>
  );
};

export default TimerContainer
