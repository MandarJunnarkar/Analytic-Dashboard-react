import React from "react";
import PerformanceChart from "./PerformanceChart";

const Performance = () => {
  return (
    <div className="bg-white h-85 md:col-span-3 w-auto">
      <div className="border-b border-gray-400 py-3">
        <h1 className="px-5 text-sm">Performance Over Time</h1>
      </div>
      <PerformanceChart />
    </div>
  );
};

export default Performance;
