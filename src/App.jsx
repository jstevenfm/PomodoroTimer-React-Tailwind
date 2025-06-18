import { useEffect, useState } from "react";

import { status } from "../src/assets/constants.js";

import Header from "./assets/components/sections/header/Header";
import TasksContainer from "./assets/components/sections/task/TasksContainer";
import TimerContainer from "./assets/components/sections/timer/TimerContainer";

function App() {
  const [currentStatus, setCurrentStatus] = useState(status[0].id);

  useEffect(() => {
    if (currentStatus === status[0].id) {
      document.body.classList.add("bg-golden-sand-50", "text-golden-sand-900");
    }
    if (currentStatus === status[1].id) {
      document.body.classList.add("bg-ziggurat-50", "text-ziggurat-900");
    }
    if (currentStatus === status[2].id) {
      document.body.classList.add("bg-cruise-50", "text-cruise-900");
    }

    return () => {
      document.body.classList.remove(
        "bg-golden-sand-50",
        "text-golden-sand-900"
      );
      document.body.classList.remove("bg-ziggurat-50", "text-ziggurat-900");
      document.body.classList.remove("bg-cruise-50", "text-cruise-900");
    };
  }, [currentStatus]);

  return (
    <>
      <Header />
      <main className="flex flex-col lg:flex-row-reverse lg:justify-evenly lg:max-w-7xl lg:m-auto">
        <TimerContainer
          currentStatus={currentStatus}
          setCurrentStatus={setCurrentStatus}
        />
        <TasksContainer currentStatus={currentStatus} />
      </main>
    </>
  );
}

export default App;
