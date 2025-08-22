import React from "react";
import { Edit3, Check,X } from "lucide-react";

const EditableCell = (value, rowId, filed) => {
  return (
    <div className="relative px-3 py-3 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg transition-all duration-300 group border border-transparent hover:border-indigo-200 hover:shadow-sm">
      <div className="flex items-center justify-between ">
        <span className="group-hover:text-indigo-700 transition-colors duration-300 font-medium ">
          Value
        </span>
        <Edit3 size={12} className=" text-indigo-400 " />
      </div>
    </div>

    //conditional rendering design
    // <div className="flex items-center space-x-2 min-w-0 ">
    //   <input
    //     type="text "
    //     className={`flex-1 px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-sm `} placeholder={`Enter`}
    //       />
    //       <div className="flex space-x-1 ">
    //           <button className="p-1.5 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-100 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95" title="Save Changes"> <Check size={14} />
    //           </button>
    //           <button className="p-1.5 text-red-600 hover:text-red-700 hover:bg-red-100 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95" title="Discard Changes"> <X size={14} />
    //           </button>
    //       </div>
    // </div>
  );
};

export default EditableCell;
