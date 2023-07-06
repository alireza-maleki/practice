import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [num, setNum] = useState(initialValue);

  const plusNumber = () => {
    setNum((preState) => preState + 1);
  };

  const minesNumber = () => {
    setNum((preState) => preState - 1);
  };

  const resetNumber = () => {
    setNum(0);
  };

  return [num, plusNumber, minesNumber, resetNumber];
};
