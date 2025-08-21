import React from "react";
import { User, DollarSign, TrendingUp } from "lucide-react";

const EditableTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border boarder boarder-r-gray-100">
      <div className="bg-gradient-to-r from from-indigo-600 via-purple-600 to-indigo-700 px-8 py-6 ">
        <div className="flex flex-cols lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <User size={28} className="text-white " />
            </div>

            <div>
              <h2 className="text-2xl font-black text-white ">
                Employee Directory
              </h2>
              <p className="text-indigo-100 text-sm">
                Manage your team with ease{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-white ">
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm ">
              <User size={16} />
              <span className="font-semibold">5</span>
              <span className="text-indigo-100"> Employees </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm ">
              <DollarSign size={16} />
              <span className="font-semibold">Total: 899534326</span>
              <span className="text-indigo-100"> Total </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm ">
              <TrendingUp size={16} />
              <span className="font-semibold">Avg: 47609239</span>
              <span className="text-indigo-100"> Avg </span>
            </div>
          </div>
        </div>
      </div>
      {/* controls */}
      
    </div>
  );
};

export default EditableTable;
