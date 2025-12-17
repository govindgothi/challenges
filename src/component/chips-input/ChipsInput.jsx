import React, { useState } from "react";

const ChipsInput = () => {
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const addNewChips = () => {
    if (!inputVal) return;
    setData((prev) => [...prev, inputVal]);
    setInputVal("");
  };

  const handleRemoveChips = (index) => {
    setData((prev) => prev.filter((_, i) => index !== i));
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 pt-10">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[360px]">
        <h1 className="text-center text-2xl font-semibold text-green-600 mb-4">
          Chips Input
        </h1>

        <input
          className="w-full border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none rounded-xl px-3 py-2 transition"
          type="text"
          placeholder="Type and press Enter"
          value={inputVal}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addNewChips();
            }
          }}
        />

        <div className="flex flex-wrap gap-2 mt-4">
          {data?.length > 0 &&
            data.map((val, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm shadow-sm"
              >
                <span>{val}</span>
                <span
                  className="cursor-pointer text-red-500 hover:text-red-700 transition"
                  onClick={() => handleRemoveChips(i)}
                >
                  ✕
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChipsInput;
