const BtnTimerControls = ({ title, onclick, className }) => {
  return (
    <button className={`cursor-pointer hover:scale-105 ${className}`} title={title} onClick={onclick}>{title}</button>

  )
}

export default BtnTimerControls