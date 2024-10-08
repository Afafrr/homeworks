export const useValidationHook = () => {
  const validate = (text) => {
    const INVALID_CHARACTERS = /[@#$%^&*)(+=_-]/g;
    if (INVALID_CHARACTERS.test(text)) return "Invalid characters!";
    if (text.length > 30) return "Task name too long! (max 30 characters)";
    if (text.trim() === "") return "Task cannot be empty!";
    return false;
  };
  return { validate };
};
