import ButtonRadioStatus from "../../ui/BtnRadioStatus"

const TimerStatus = ({ setTimer, status }) => {

  const handleStatus = (id) => {
    switch (id) {
      case 'pomodoro':
        // setTimer({ minutes: 25, seconds: 0 })
        setTimer(status[0].timer)
        break
      case 'short-break':
        // setTimer({ minutes: 5, seconds: 0 })
        setTimer(status[1].timer)
        break
      case 'long-break':
        // setTimer({ minutes: 15, seconds: 0 })
        setTimer(status[2].timer)
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