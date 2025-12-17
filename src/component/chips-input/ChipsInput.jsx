import React, { useState } from "react";

const ChipsInput = () => {
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const addNewChips = () => {
    if(!inputVal) return 
     setData((prev) => [...prev, inputVal]);
     setInputVal("")
  };
  const handleRemoveChips = (index)=>{
   setData((prev)=>(
    prev.filter((_,i) => index !== i)
   ));
  }
  return (
    <div className=" flex flex-col items-center">
      <h1 className="bg-green-600 w-40 text-white text-xl mt-5 px-5 py-2 rounded-xl">
        Chips Input
      </h1>
      <div className="mt-3">
        <input
         className="border-2 border-gray-300 outline-none rounded-xl px-2 py-1 w-80"
          type="text"
          placeholder="Input chips"
          value={inputVal}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              addNewChips();
            }
          }}
        />
      </div>
      <div className="flex w-80 flex-wrap">
        {data?.length>0 && data.map((val,i)=>(
          <p className="flex justify-between items-center m-2 bg-gray-300 rounded-xl ">
            <span className="px-2 py-1">{val}</span>
            <span className="text-red-400 pr-2" onClick={()=>{handleRemoveChips(i)}}>❌</span>
            </p>
        ))}
      </div>
    </div>
  );
};

export default ChipsInput;
