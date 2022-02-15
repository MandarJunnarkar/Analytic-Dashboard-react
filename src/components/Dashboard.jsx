import React from "react";
import ActiveUsers from "./ActiveUsers";
import DailyRevenue from "./DailyRevenue";
import DashboardBreadcrumb from "./DashboardBreadcrumb";
import NewProjects from "./NewProjects";
import ReturnOnInvestment from "./ReturnOnInvestment";
import SystemHealth from "./SystemHealth";
import Performance from "./Performance";

const Dashboard = () => {
  return (
    <div className="p-5 w-full">
      <DashboardBreadcrumb />
      <h1>Here's what's happening</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3 w-full">
        <DailyRevenue />
        <NewProjects />
        <SystemHealth />
        <ReturnOnInvestment />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-5 my-5">
        <ActiveUsers />
        <Performance />
      </div>
    </div>
  );
};

export default Dashboard;
