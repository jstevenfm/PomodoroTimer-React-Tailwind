import IconRestart from "../icons/IconRestart"
import IconPlay from "../icons/IconPlay"
import IconPause from "../icons/IconPause"
import IconNextStatus from "../icons/IconNextStatus"

const iconsControls = {
  Reset: IconRestart,
  Start: IconPlay,
  Pause: IconPause,
  "Next State": IconNextStatus,
};

const BtnTimerControls = ({ title, onclick, className }) => {
  const IconComponent = iconsControls[title] || IconPlay
  return (
    <button
      className={`py-3 px-5 cursor-pointer hover:scale-120 ${className}`}
      title={title}
      onClick={onclick}
    >
      <IconComponent />
    </button>
  );
};

export default BtnTimerControls;
