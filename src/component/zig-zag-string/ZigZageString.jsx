import React, { useState } from "react";

const ZigZageString = () => {
  const [addString, setAddString] = useState("");
  const [zigZageString, setZigZagString] = useState(null);

  const handleSubmit = () => {
    if (!addString.trim()) return;

    const zz = addString
      .split(",")
      .map((item, index) =>
        index % 2 === 0 ? item : item.split("").reverse().join("")
      );

    setAddString("");
    setZigZagString(zz.join(""));

    setTimeout(() => {
      setZigZagString(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Zig-Zag String Generator
        </h1>

        {/* Input + Button */}
        <div className="flex gap-2">
          <input
            type="text"
            value={addString}
            onChange={(e) => setAddString(e.target.value)}
            placeholder="Enter comma separated values"
            className="flex-1 border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </div>

        {/* Output */}
        {zigZageString !== null && (
          <div className="mt-4 p-3 bg-amber-100 border border-amber-300 rounded-md text-center animate-pulse">
            <span className="font-semibold text-gray-700">
              Output:
            </span>{" "}
            <span className="text-gray-900">{zigZageString}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZigZageString;
