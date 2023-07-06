import React from "react";

import { useCounter } from "./useCounter";

const Counter = () => {
  const [num, plusNumber, minesNumber, resetNumber] = useCounter();

  return (
    <>
      <div className="flex items-center space-x-2">
        <button
          onClick={minesNumber}
          className="font-2xl px-6 py-2 border rounded bg-red-500 mx-2"
        >
          -
        </button>
        <p>{num}</p>
        <button
          onClick={plusNumber}
          className="font-2xl px-6 py-2 border rounded bg-blue-500 mx-2"
        >
          +
        </button>
      </div>
      <div>
        <button
          className="font-xl px-10 py-2 border rounded bg-yellow-500"
          onClick={resetNumber}
        >
          Reset
        </button>
      </div>
    </> 
  );
};

export default Counter;
