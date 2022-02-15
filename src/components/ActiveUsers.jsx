import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

const userData = {
  labels: [
    '','','','','','','','','',
  ],
  datasets: [
    {
      data: [102 ,120, 100, 95, 93, 50, 100, 110, 93],
      backgroundColor: 'rgb(79 70 229)'
    },
  ],
  
};

const ActiveUsers = () => {
  return (
    <div className="bg-white h-85 p-5 flex flex-col md:col-span-1 gap-5">
      <div className="flex justify-between">
        <div>
          <h1 className="text-sm">Active Users</h1>
          <h1 className="text-xs">Page views per second</h1>
        </div>
        <div>
          <h1>109</h1>
        </div>
      </div>
      <div className="h-32 w-full">
        <Bar data={userData} options={{
          plugins:{
            legend:false,

          },
        }}/>
      </div>
    </div>
  );
};

export default ActiveUsers;
