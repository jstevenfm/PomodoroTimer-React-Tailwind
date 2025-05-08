import { useState } from "react";

import TimerStatus from "./TimerStatus";
import TimerCounter from "./TimerCounter";
import TimerControls from "./TimerControls";

const TimerContainer = () => {
  const [timer, setTimer] = useState({
    minutes: 25,
    seconds: 0,
  });

  return (
    <section className="flex flex-col items-center justify-center my-14 mx-auto">
      <TimerStatus setTimer={setTimer} />
      <TimerCounter minutes={timer.minutes} seconds={timer.seconds} />
      <TimerControls setTimer={setTimer} />
    </section>
  );
};

export default TimerContainer
