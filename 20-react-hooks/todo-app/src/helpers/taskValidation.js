export const taskValidation = (text, taskList) => {
  const INVALID_CHARACTERS = /[@#$%^&*)(+=_-]/g;

  if (INVALID_CHARACTERS.test(text)) return "Invalid characters!";
  if (text.length > 30) return "Task name too long! (max 30 characters)";
  if (text.trim() === "") return "Task cannot be empty!";
  else {
    return false;
  }
};
