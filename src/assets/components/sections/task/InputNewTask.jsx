const InputNewTask = () => {
  return (
    <form className="flex justify-between items-center bg-yellow-300 mt-5 rounded-xl p-4 gap-4">
      <input type="text" className="flex-2/3" ></input>
        <button type="submit">Add</button>
        <button type="button">Cancel</button>
    </form>
  )
}

export default InputNewTask