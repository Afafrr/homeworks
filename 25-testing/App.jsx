import { useState, useEffect } from "react";
import { CreateTodoTask } from "./components/CreateTodoTask";
import { Task } from "./components/Task";
import { v4 as uuidv4 } from "uuid";
import { ErrorMessage } from "./components/ErrorMessage";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const taskState = { taskList, setTaskList };

  useEffect(() => {
    const storageTaskList = JSON.parse(localStorage.getItem("taskList"));
    if (storageTaskList && storageTaskList.length > 0) {
      setTaskList(storageTaskList);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
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
