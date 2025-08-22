import React, { useState, useMemo } from "react";
import {
  User,
  DollarSign,
  TrendingUp,
  Plus,
  RotateCcw,
  Search,
  Filter,
  Trash2,
  Users,
} from "lucide-react";
import EditableCell from "./EditableCell";

const EditableTable = () => {
  const INITIAL_DATA = [
    {
      id: "1",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      roles: "Frontend Developer",
      department: "Engineering",
      salary: "9500",
    },
    {
      id: "2",
      name: "Bob Williams",
      email: "bob.williams@example.com",
      roles: "Product Manager",
      department: "Product",
      salary: "5000",
    },
    {
      id: "3",
      name: "Carol Lee",
      email: "carol.lee@example.com",
      roles: "UX Designer",
      department: "Design",
      salary: "7000",
    },
    {
      id: "4",
      name: "David Kim",
      email: "david.kim@example.com",
      roles: "Data Analyst",
      department: "Analytics",
      salary: "2000",
    },
    {
      id: "5",
      name: "Eva Brown",
      email: "eva.brown@example.com",
      roles: "HR Specialist",
      department: "HR",
      salary: "8000",
    },
    {
      id: "6",
      name: "Frank Miller",
      email: "frank.miller@example.com",
      roles: "Marketing Lead",
      department: "Marketing",
      salary: "9000",
    },
  ];

  const DEPARTMENTS = [
    "Engineering",
    "Marketing",
    "Sales",
    "HR",
    "Design",
    "Product",
    "Analytics",
  ];

  const [data, setData] = useState(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");

  const [editingCell, setEditingCell] = useState(null);

  const filteredData = useMemo(() => {
    let filtered = data;
    if (searchTerm) {
      filtered = filtered.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (departmentFilter) {
      filtered = filtered.filter((row) => row.department === departmentFilter);
    }
    return filtered;
  }, [data, searchTerm, departmentFilter]);

  const getTotalSalary = () => {
    return filteredData.reduce((sum, row) => sum + Number(row.salary), 0);
  };

  const getAverageSalary = () => {
    return filteredData.length > 0
      ? Math.round(getTotalSalary() / filteredData.length)
      : 0;
  };

  const handleEdit = (rowId, field) => {
    setEditingCell({ rowId, field });
  };

  const getFieldType = (field) => {
    if (field === "email") return "email";
    if (field === "salary") return "number";
    return "text";
  };

  const handleCancel = () => {
    setEditingCell(null);
  }
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border boarder boarder-r-gray-100">
      <div className="bg-gradient-to-r from from-indigo-600 via-purple-600 to-indigo-700 px-8 py-6 ">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
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
              <span className="font-semibold">{filteredData.length}</span>
              <span className="text-indigo-100"> Employees </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm ">
              <DollarSign size={16} />
              <span className="font-semibold">
                ${getTotalSalary().toLocaleString()}
              </span>
              <span className="text-indigo-100"> Total </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm ">
              <TrendingUp size={16} />
              <span className="font-semibold">
                ${getAverageSalary().toLocaleString()}
              </span>
              <span className="text-indigo-100"> Avg </span>
            </div>
          </div>
        </div>
      </div>
      {/* controls */}
      <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
          <div className="flex flex-wrap items-center gap-3 ">
            <button className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white    px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow active:scale-95 ">
              <Plus size={18} />
              <span>Add Employee</span>
            </button>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white    px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow active:scale-95 ">
              <RotateCcw size={18} />
              <span>Undo</span>
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <div className="relative ">
              <Search
                size={18}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 "
              />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Search Employees"
                className="pl-12 pr-4 py-3  border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-50 focus:border-transparent transition-all duration-300 w-full sm:w-80 bg-white shadow-md "
              />
            </div>

            <div className="relative ">
              <Filter
                size={18}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 "
              />
              <select
                type="text"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                placeholder="Search Employees"
                className="pl-12 pr-8 py-3  border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-50 focus:border-transparent transition-all duration-300 w-full sm:w-80 bg-white shadow-sm appearance-none cursor-pointer  "
              >
                <option value="">All Departments </option>
                {DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
            <tr>
              <th className="px-8 py-5  text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Employee
              </th>
              <th className="px-8 py-5  text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-8 py-5  text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Position
              </th>
              <th className="px-8 py-5  text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Department
              </th>
              <th className="px-8 py-5  text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Salary
              </th>
              <th className="px-8 py-5  text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredData.map((row, index) => (
              <tr
                className={`hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/100"
                }`}
              >
                <td className="px-8 py-4 ">
                  <EditableCell
                    value={row.name}
                    rowId={row.id}
                    filed="name"
                    isEditing={
                      editingCell?.rowId === row.id &&
                      editingCell?.field === "name"
                    }
                    onEdit={handleEdit}
                    onCancel={handleCancel}
                    type={getFieldType("name")}
                  />
                  {/* i will use map method to get the data from object  */}
                </td>
                <td className="px-8 py-4 ">
                  <EditableCell
                    value={row.email}
                    rowId={row.id}
                    filed="email"
                    isEditing={
                      editingCell?.rowId === row.id &&
                      editingCell?.field === "email"
                    }
                    onEdit={handleEdit}
                    onCancel={handleCancel}
                    type={getFieldType("email")}
                  />
                  {/* i will use map method to get the data from object  */}
                </td>
                <td>
                  <button className="p-2 text-red-500  hover:text-red-700  hover:bg-red-100 rounded-lg transition-all duration-300 transform hover:scale-110 active:scale-95">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Conditional Rendering */}

        {filteredData.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Users size={64} className="mx-auto mb-4 opacity-0" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No Employees Found{" "}
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 ">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="text-sm text-gray-600">
            Showing <span>{filteredData.length}</span> of{" "}
            <span className="font-semibold ">{data.length} </span>Employees
          </div>
          <div className="flex flex-wrap items-center  gap-6  text-sm text-gray-600 ">
            <div className="flex items-center space-x-2 ">
              <DollarSign size={16} className=" text-green-600" />
              <span>
                Total Budget:{" "}
                <strong className="text-green-600 ">
                  ${getTotalSalary().toLocaleString()}{" "}
                </strong>
              </span>
            </div>

            <div className="flex items-center space-x-2 ">
              <TrendingUp size={16} className=" text-green-600" />
              <span>
                Average:{" "}
                <strong className="text-green-600 ">
                  ${getAverageSalary().toLocaleString()}{" "}
                </strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditableTable;
