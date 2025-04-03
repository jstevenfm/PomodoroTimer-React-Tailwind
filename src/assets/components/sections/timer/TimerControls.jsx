import BtnTimerControls from "../../ui/BtnTimerControls";

const TimerControls = ({ timer, setTimer }) => {
  const controls = [
    { title: "Reset" },
    { title: "Start" },
    { title: "Next State" },
  ]

  const actualTimerStatus = {
    minutes: timer.minutes,
    seconds: timer.seconds,
  }

  const currentTimer = {
    minutes: timer.minutes,
    seconds: timer.seconds - 2,
  }

  const resetTimer = () => {
    setTimer(actualTimerStatus)
    console.log("Reset Timer", actualTimerStatus.minutes, actualTimerStatus.seconds);
  }

  const handleTimer = (e) => {
    const btn = e.target.innerText;
    switch (btn) {
      case "Reset":
        resetTimer()
        break;
      case "Start":
        break;
      case "Next State":
        console.log("Next State");
        break;
      default:
        break;
    }
  }

  return (
    <div className="py-2 px-5 w-3/4 max-w-72 grid grid-cols-3 justify-items-center">
      {controls.map( control => <BtnTimerControls key={control.title} title={control.title} onclick={handleTimer} /> )}
    </div>
  );
}

export default TimerControls