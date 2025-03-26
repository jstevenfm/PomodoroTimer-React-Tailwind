const ButtonRadioStatus = ({id, text}) => {
  return (
    <>
      <input type="radio" id={id} name="status" />
      <label htmlFor={id} className="py-4 px-2.5 cursor-pointer text-center hover:scale-105">{text}</label>
    </>
  )
}

export default ButtonRadioStatus