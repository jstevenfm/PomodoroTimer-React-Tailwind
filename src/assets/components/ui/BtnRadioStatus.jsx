const ButtonRadioStatus = ({
  id,
  text,
  onClick,
  defaultChecked,
  currentStatus,
}) => {
  let stylesComponent = "";
  if (id === "pomodoro" && currentStatus === "pomodoro") {
    stylesComponent = "peer-checked/pomodoro:bg-golden-sand-500 shadow-sm";
  } else if (id === "short-break" && currentStatus === "short-break") {
    stylesComponent = "peer-checked/short-break:bg-ziggurat-500 shadow-sm";
  } else if (id === "long-break" && currentStatus === "long-break") {
    stylesComponent = "peer-checked/long-break:bg-cruise-500 shadow-sm";
  }

  return (
    <>
      <input
        type="radio"
        id={id}
        name="status"
        className={`hidden peer/${id}`}
        onClick={onClick}
        defaultChecked={defaultChecked}
      />
      <label
        htmlFor={id}
        className={`p-4 rounded-4xl cursor-pointer text-center hover:scale-110 ${stylesComponent}`}
      >
        {text}
      </label>
    </>
  );
};

export default ButtonRadioStatus;
