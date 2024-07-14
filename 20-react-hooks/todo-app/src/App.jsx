import { useState, useEffect } from "react";
import { CreateTodoTask } from "./Components/CreateTodoTask";
import { Task } from "./Components/Task";
import { v4 as uuidv4 } from "uuid";
import { ErrorMessage } from "./Components/ErrorMessage";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const taskState = { taskList, setTaskList };
  
  useEffect(() => {
    const storageTaskList = JSON.parse(localStorage.getItem("taskList"));
    if (storageTaskList.length > 0) {
      setTaskList(storageTaskList);
    }
  }, []);

  useEffect(() => {
    if (taskList.length > 0) {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  }, [taskList]);

  return (
    <div className="todo__container">
      <CreateTodoTask taskState={taskState} setErrorMsg={setErrorMsg} />
      <ErrorMessage errorMsg={errorMsg} />

      <ul className="todo__task-list">
        {taskList.map((task) => (
          <Task
            task={task}
            taskState={taskState}
            setErrorMsg={setErrorMsg}
            key={uuidv4()}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
