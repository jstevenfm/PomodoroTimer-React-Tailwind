import { useState } from "react";

import InputNewTask from "./InputNewTask";

import IconAddTask from '../../icons/IconAddTask'

const TasksHeader = ({ setTasks, currentStatus }) => {
  const [showInputNewTask, setShowInputNewTask] = useState(false)

  const toggleInputNewTask = () => {
    setShowInputNewTask(!showInputNewTask);
  };

  return (
    <>
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Tasks</h2>
        <button title="Add New Task" onClick={toggleInputNewTask} className="cursor-pointer hover:scale-120" >
          <IconAddTask />
        </button>
      </header>
      <InputNewTask currentStatus={currentStatus} setTasks={setTasks} setShowInputNewTask={setShowInputNewTask} className={showInputNewTask ? '' : 'hidden'} />
    </>
  );
};

export default TasksHeader;
