import { useState } from "react";

function getInitialValue<T>(key: string, initialValue: T): T {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : initialValue;
}

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() =>
    getInitialValue<T>(key, initialValue)
  );

  const setValue = (value: T) => {
    try {
      const valueToStore = JSON.stringify(value);
      localStorage.setItem(key, valueToStore);
      setStoredValue(value);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
