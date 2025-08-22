import React, { useState, useRef } from "react";
import { Edit3, Check, X } from "lucide-react";

const EditableCell = ({
  value,
  rowId,
  filed,
  isEditing,
  onEdit,
  type = "text",
  onCancel,
}) => {

  const [showEditIcon, setShowEditIcon] = useState(false);
  const inputRef = useRef(null);
  const [editValue, setEditValue] = useState(value);
  const [isValid, setIsValid] = useState(true);

  const formatValue = (val) => {
    if (type === "number" && typeof val === "number") {
      return filed === 'salary' ? `${val.toLocaleString()} ` : `${val.toString()}`;
    }
    return val.toString();
  }

  // step 6
  const validateInput = (val) => { 
    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(val.toString());
    }
    if (type === "number") {
      return !isNaN(Number(val)) && Number(val) >= 0;
    }
    return val.toString().trim().length > 0;
  };

  if (isEditing) {
    return (

      //conditional rendering design
      
    <div className="flex items-center space-x-2 min-w-0 ">
        <input
          ref={inputRef}
          value={editValue}
          onChange={(e) =>{setEditValue(e.target.value); setIsValid(true);}}
        type={type}
        className={`flex-1 px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-sm `} placeholder={`Enter`}
          />
          <div className="flex space-x-1 ">
              <button className="p-1.5 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-100 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95" title="Save Changes"> <Check size={14} />
              </button>
              <button className="p-1.5 text-red-600 hover:text-red-700 hover:bg-red-100 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95" title="Discard Changes"> <X size={14} />
              </button>
          </div>
    </div>
  )
  }
  return (
    <div className="relative px-3 py-3 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg transition-all duration-300 group border border-transparent hover:border-indigo-200 hover:shadow-sm">
      <div
        className="flex items-center justify-between "
        onMouseDown={() => setShowEditIcon(true)}
        onMouseLeave={() => setShowEditIcon(false)}
      >
        <span className="group-hover:text-indigo-700 transition-colors duration-300 font-medium   " onClick={()=>onEdit(rowId, filed)}>
          {formatValue(value)}
        </span>
        {showEditIcon && <Edit3 size={12} className=" text-indigo-400 " />}
      </div>
    </div>

   
  );
};

export default EditableCell;
