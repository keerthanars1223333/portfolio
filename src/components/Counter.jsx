import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [multi, setmulti] = useState(2);


  
  function increment() {
    if (count < 20) setCount(count + multi*multi);
  }

  function decrement() {
    if (count > 0) setCount(count - multi*multi);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center gap-6 w-80">
        <h1 className="text-5xl font-bold text-gray-800">{count}</h1>

        <div className="flex gap-3">
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
          >
            Increment
          </button>

          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
          >
            Decrement
          </button>
        </div>

        <button
          onClick={reset}
          className="px-6 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;