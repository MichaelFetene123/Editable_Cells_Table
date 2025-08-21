import React from "react";
import EditableTable from './components/EditableTable';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="space-y-8 ">
          <EditableTable />
        </div>
      </div>
    </div>
  );
};

export default App;
