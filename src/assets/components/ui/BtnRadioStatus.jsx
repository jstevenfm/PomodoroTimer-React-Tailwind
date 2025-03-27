const ButtonRadioStatus = ({id, text}) => {
  return (
    <>
      <div className="hover:scale-105"> {/* This div is just for styling purposes, you can remove it*/}
        <input type="radio" id={id} name="status" className="w-2" />
        <label htmlFor={id} className="py-4 px-2.5 cursor-pointer text-center hover:scale-105">{text}</label>
      </div>
    </>
  )
}

export default ButtonRadioStatus