import React from "react";
import { Edit3 } from "lucide-react";

const EditableCell = () => {
  //conditional rendering design
  return (
    <div className="relative px-3 py-3 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg transition-all duration-300 group border border-transparent hover:border-indigo-200 hover:shadow-sm">
      <div className="flex items-center justify-between ">
        <span className="group-hover:text-indigo-700 transition-colors duration-300 font-medium ">
          Value
        </span>
        <Edit3 size={12} className=" text-indigo-400 " />
      </div>
    </div>
  );
};

export default EditableCell;
