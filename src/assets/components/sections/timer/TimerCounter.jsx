const TimerCounter = ({ minutes, seconds}) => {
  return (
    <div className="flex my-16 mx-auto text-8xl font-medium">
      <p>{minutes.toString().padStart(2, "0")}</p>
      <p>:</p>
      <p>{seconds.toString().padStart(2, "0")}</p>
    </div>
  )
}

export default TimerCounter