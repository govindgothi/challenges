import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const updateCountState = (action) => {
    if (action === "INCREAMENT") {
      setCount((count) => count + 1);
    } else if (action === "DECREAMENT" && count > 0) {
      setCount((count) => count - 1);
    } else if (action === "RESET") {
      setCount(0);
    }
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="w-96 h-96 bg-green-200 shadow-lg rounded-2xl flex flex-col items-center justify-center gap-6">
        
        <h2 className="text-xl font-semibold bg-green-500 text-white px-6 py-3 rounded-xl">
          Counter: <span className="font-bold">{count}</span>
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => updateCountState("INCREAMENT")}
            className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
          >
            Increament
          </button>

          <button
            onClick={() => updateCountState("DECREAMENT")}
            className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
          >
            Decreament
          </button>

          <button
            onClick={() => updateCountState("RESET")}
            className="px-4 py-2 bg-red-200 rounded-xl hover:bg-red-300 transition"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
};

export default Counter;
