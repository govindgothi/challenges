import React, { useState } from "react";
import { accordianData } from "../../constant";
const Accordian = () => {
  const [data, setData] = useState(accordianData);

  const handleViewUpdate = (index,val)=>{
    setData(data.map((item,i) => ({ ...item, open: i == index ? val : item.open })));
  }

  useState(() => {
    setData(accordianData.map((item,index) => ({ ...item, open: true })));
  }, []);
  return (
    <div className="pt-4 flex flex-col items-center ">
      <h2 className="text-center bg-gray-200 min-w-96 p-2 rounded-md font-bold text-xl ">Accordian for Questions list</h2> 
    <div className="flex flex-col items-center pt-4">
      {data &&
        data.length > 0 &&
        data.map((item, i) => (
          <p key={i} className="p-2 bg-amber-50 m-1 border border-gray-400 min-w-96 max-w-96 rounded-md text-sm">
          <p className="flex justify-between items-center "> <span className="py-auto"> {item.title}</span> <span onClick={()=>handleViewUpdate(i,!item.open)} className="cursor-pointer text-sm">{item.open == true ? '-' : '+'}</span></p>
          <p className="bg-amber-50 text-xs">{item.open == true ? item.description:""}</p>
          </p>
        ))}
    </div>
    </div>
  );  
};

export default Accordian;
