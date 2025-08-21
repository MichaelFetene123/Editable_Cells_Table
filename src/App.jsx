import React from "react";
import EditableTable from './components/EditableTable';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="space-y-8 ">
          <EditableTable />
          {/* technical details  */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800  rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Technical implements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
