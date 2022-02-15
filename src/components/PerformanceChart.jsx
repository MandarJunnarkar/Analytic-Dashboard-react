import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const performanceData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [10, 5, 12, 20, 13, 28, 18, 3, 14, 12, 13, 5],
      borderColor: 'rgb(79 70 229)'
    },
  ],
};

const PerformanceChart = () => {
  return (
    <div className="h-5/6 w-full p-2">
      <Line
        data={performanceData}
        className="h-full w-full"
        options={{
          maintainAspectRatio: false,
          tension:0.45,
          plugins:{
              legend:false,
          },
          scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return value === 0? value: value + 'k'
                    }
                }
            }
        }

        }}
      />
    </div>
  );
};

export default PerformanceChart;
