import {
  useState,
  useReducer,
  useEffect,
  createContext,
  useMemo,
  useCallback,
} from "react";
import { CreateTodoTask } from "./Components/CreateTodoTask";
import { Task } from "./Components/Task";
import { v4 as uuidv4 } from "uuid";
import { ErrorMessage } from "./Components/ErrorMessage";
import { TaskContext, TaskDispatchContext } from "./helpers/TasksContext";
import { tasksReducer } from "./helpers/TaskReducer";
import { ACTIONS } from "./helpers/TaskReducer";
import { useLocalStorage } from "./hooks/useLocalStorage";
export const ErrorContext = createContext(null);

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const [storage, setStorage] = useLocalStorage("taskList");
  const [errorMsg, setErrorMsg] = useState("");

  const handleClearChecked = useCallback(() => {
    setErrorMsg("");
    dispatch({ type: ACTIONS.DEL_CHECKED });
  }, [dispatch]);

  //handling LOCAL STORAGE
  useEffect(() => {
    dispatch({ type: ACTIONS.REPLACE, value: storage });
  }, []);
  useEffect(() => {
    setStorage(tasks);
  }, [tasks]);

  const tasksList = useMemo(
    () => tasks.map((task) => <Task task={task} key={uuidv4()} />),
    [tasks]
  );

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        <ErrorContext.Provider value={setErrorMsg}>
          <div className="todo__container">
            <a className="todo__clear-btn btn" onClick={handleClearChecked}>
              Clear checked tasks
            </a>
            <CreateTodoTask />
            <ErrorMessage errorMsg={errorMsg} />
            <ul className="todo__task-list">{tasksList}</ul>
          </div>
        </ErrorContext.Provider>
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export default App;
