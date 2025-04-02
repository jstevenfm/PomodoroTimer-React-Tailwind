const ButtonRadioStatus = ({id, text, onClick, defaultChecked }) => {
  return (
    <>
      <div className="hover:scale-105"> {/* This div is just for styling purposes, you can remove it*/}
        <input type="radio" id={id} name="status" className="w-2" onClick={onClick} defaultChecked={defaultChecked} />
        <label htmlFor={id} className="px-2.5 cursor-pointer text-center hover:scale-105">{text}</label>
      </div>
    </>
  )
}

export default ButtonRadioStatus