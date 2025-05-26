import { useState } from "react";

import InputNewTask from "./InputNewTask";

const TasksHeader = ({ setTasks }) => {
  const [showInputNewTask, setShowInputNewTask] = useState(false)

  const toggleInputNewTask = () => {
    setShowInputNewTask(!showInputNewTask);
  };

  return (
    <>
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Tasks</h2>
        <button onClick={toggleInputNewTask} className="cursor-pointer" >
          Add Task
        </button>
      </header>
      <InputNewTask setTasks={setTasks} setShowInputNewTask={setShowInputNewTask} className={showInputNewTask ? '' : 'hidden'} />
    </>
  );
};

export default TasksHeader;
