const ButtonRadioStatus = ({id, text, onClick, defaultChecked }) => {
  return (
    <>
        <input type="radio" id={id} name="status" className="hidden" onClick={onClick} defaultChecked={defaultChecked} />
        <label htmlFor={id} className="px-2.5 cursor-pointer text-center hover:scale-105">{text}</label>
    </>
  )
}

export default ButtonRadioStatus