const InputNewTask = ({ setTasks, className, setShowInputNewTask }) => {

  const addNewTask = (e) => {
    e.preventDefault();

    const inputTitle = e.target.title.value;

    if (inputTitle === "") {
      return;
    }
    const newTask = {
      id: Math.random().toString(36).substring(2, 9),
      title: inputTitle,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    e.target.title.value = "";
  };

  return (
    <form onSubmit={addNewTask} className={`flex justify-between items-center bg-yellow-300 mt-5 rounded-xl p-4 gap-4 ${className}`}>
      <input type="text" name="title" className="flex-2/3" />
        <button type="submit" >Add</button>
        <button type="reset" onClick={() => setShowInputNewTask(false)}>Cancel</button>

    </form>
  )
}

export default InputNewTask