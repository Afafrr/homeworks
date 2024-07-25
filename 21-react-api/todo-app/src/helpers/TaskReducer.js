export const ACTIONS = {
  ADD: "add",
  DELETE: "delete",
  UPDATE: "update",
  TOGGLE: "toggle",
  REPLACE: "replace",
  DEL_CHECKED: "del_checked",
};
export function tasksReducer(taskList, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      return [...taskList, action.value];
    }
    case ACTIONS.DELETE: {
      return taskList.filter((task) => task.text !== action.value);
    }
    case ACTIONS.UPDATE: {
      return taskList.map((task) => {
        if (task.text === action.value.text) {
          return { ...task, text: action.value.newText };
        } else {
          return task;
        }
      });
    }
    case ACTIONS.TOGGLE: {
      return taskList.map((task) => {
        if (task.text === action.value) {
          return { ...task, isChecked: !task.isChecked };
        } else {
          return task;
        }
      });
    }
    case ACTIONS.REPLACE: {
      return [...action.value];
    }
    case ACTIONS.DEL_CHECKED: {
      return taskList.filter((task) => task.isChecked === false);
    }
  }
}
