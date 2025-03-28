import TimerStatus from "./TimerStatus";
import TimerCounter from "./TimerCounter";
import TimerControls from "./TimerControls";

const TimerContainer = () => {
  return (
    <section className="flex flex-col items-center justify-center my-14 mx-auto">
      <TimerStatus />
      <TimerCounter />
      <TimerControls />
    </section>
  );
};

export default TimerContainer
