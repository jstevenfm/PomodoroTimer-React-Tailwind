import { useState } from "react"
import ButtonRadioStatus from "../../ui/BtnRadioStatus"

const TimerStatus = () => {
  const status = [
    {id: 'pomodoro', text: 'Pomodoro', defaultChecked: true},
    {id: 'short-break', text: 'Short Break', defaultChecked: false},
    {id: 'long-break', text: 'Long Break', defaultChecked: false}
  ]

  const handleStatus = (id) => {
    switch (id) {
      case 'pomodoro':
        break
      case 'short-break':
        break
      case 'long-break':
        break
    }
  }

  return (
    <fieldset className="w-full grid grid-cols-3">
      {status.map( item => (
        <ButtonRadioStatus key={item.id} id={item.id} text={item.text} onClick={() => handleStatus(item.id)} defaultChecked={item.defaultChecked}/>
      ))}
    </fieldset>
  )
}

export default TimerStatus