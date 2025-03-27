import BtnTimerControls from "../../ui/BtnTimerControls";

const TimerControls = () => {
  const controls = [
    { title: "Reset" },
    { title: "Start" },
    { title: "Next State" },
  ]

  return (
    <div className="py-2 px-5 w-3/4 max-w-72 grid grid-cols-3 justify-items-center">
      {controls.map( control => <BtnTimerControls key={control.title} title={control.title} /> )}
    </div>
  );
}

export default TimerControls