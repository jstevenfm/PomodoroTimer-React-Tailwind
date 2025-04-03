const BtnTimerControls = ({ title, onclick }) => {
  return (
    <button className="cursor-pointer hover:scale-105" title={title} onClick={onclick}>{title}</button>

  )
}

export default BtnTimerControls