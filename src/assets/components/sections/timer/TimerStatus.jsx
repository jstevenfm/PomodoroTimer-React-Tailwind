import ButtonRadioStatus from "../../ui/BtnRadioStatus"

const TimerStatus = ({ setTimer, status, setCurrentStatus, setIsActive }) => {

  const handleStatus = (id) => {
    switch (id) {
      case 'pomodoro':
        setTimer(status[0].timer)
        setCurrentStatus(status[0].id)
        setIsActive(false)
        break
      case 'short-break':
        setTimer(status[1].timer)
        setCurrentStatus(status[1].id)
        setIsActive(false)
        break
      case 'long-break':
        setTimer(status[2].timer)
        setCurrentStatus(status[2].id)
        setIsActive(false)
        break
    }
  }

  return (
    <fieldset className="w-full grid grid-cols-3 rounded-3xl py-4 px-2.5 shadow-sm bg-yellow-100">
      {status.map( item => (
        <ButtonRadioStatus key={item.id} id={item.id} text={item.text} onClick={() => handleStatus(item.id)} defaultChecked={item.defaultChecked}/>
      ))}
    </fieldset>
  )
}

export default TimerStatus