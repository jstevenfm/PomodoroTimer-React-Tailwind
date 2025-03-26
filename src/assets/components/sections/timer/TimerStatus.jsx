import ButtonRadioStatus from "../../ui/BtnRadioStatus"

const TimerStatus = () => {
  const status = [
    {id: 'pomodoro', text: 'Pomodoro'},
    {id: 'short-break', text: 'Short Break'},
    {id: 'long-break', text: 'Long Break'}
  ]

  return (
    <fieldset className="w-full grid grid-cols-3">
      {status.map( item => (
        <ButtonRadioStatus key={item.id} id={item.id} text={item.text} />
      ))}
    </fieldset>
  )
}

export default TimerStatus