import { useState, useEffect } from "react";

export const useLocalStorage = (key) => {
  const [storage, setStorage] = useState(() => cb());

  function cb() {
    console.log("storage");
    const storageContent = JSON.parse(localStorage.getItem(key));
    if (storageContent) return storageContent;
    return [];
  }
  useEffect(() => {
    if (storage && storage.length > 0) {
      localStorage.setItem(key, JSON.stringify(storage));
    }
  }, [storage]);

  return [storage, setStorage];
};
