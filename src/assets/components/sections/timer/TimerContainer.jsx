import { useState } from "react";

import { status } from '../../../constants.js'

import TimerStatus from "./TimerStatus";
import TimerCounter from "./TimerCounter";
import TimerControls from "./TimerControls";

const TimerContainer = ({ currentStatus, setCurrentStatus }) => {

  const [timer, setTimer] = useState(status[0].timer);
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
