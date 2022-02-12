import React, { useState } from "react";
import MenuData from "../sidebarMenu.json";

const Sidebar = () => {
  const [managementData, setManagementData] = useState(MenuData.Management);
  const [appListData, setAppListData] = useState(MenuData.Applications);

  const handleManagementExpand = (id, isManagementExpand) => {
    const managementArrayData = [...managementData];
    managementArrayData[id].isManagementExpand = !isManagementExpand;
    setManagementData(managementArrayData);
  };
  const handleAppListExpand = (id, isApplicationExpand) => {
    const applicationArrayData = [...appListData];
    applicationArrayData[id].isApplicationExpand = !isApplicationExpand;
    setAppListData(applicationArrayData);
  };

  return (
    <div className="w-56 h-max min-h-screen bg-white pb-3">
      <div className="flex flex-col items-center border-b pb-3 border-black">
        <div className="bg-gray-300 rounded-full h-12 w-12 flex flex-col justify-center mx-auto mt-3 text-white text-2xl">
          <i className="bi bi-person-fill self-center"></i>
        </div>
        <h1 className="mt-3">demo@devias.io</h1>
        <h1 className="text-xs text-indigo-600">your tier: premium</h1>
      </div>
      <nav className="ml-2 mt-3 flex flex-col gap-4">
        <h1>Reports</h1>
        <ul className="ml-3 gap-4 flex flex-col">
          <li>
            <a href="/">
              <span>
                <i className="bi bi-pie-chart"></i>
              </span>{" "}
              Dashboard
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <i className="bi bi-bar-chart"></i>
              </span>{" "}
              Dashboard Alternative
            </a>
          </li>
        </ul>
        <h1>Management</h1>
        <ul className="ml-3 flex flex-col gap-4">
          {managementData.map((data) => {
            return (
              <li
                key={data.id}
                onClick={() => handleManagementExpand(data.id, data.isManagementExpand)}
                className="flex flex-col gap-4 hover:cursor-pointer"
              >
                <p>
                  <span>
                    <i className={`bi bi-${data.icon}`}></i>
                  </span>{" "}
                  {data.listName}
                </p>
                {data.isManagementExpand &&
                  data.sublist.map((item, index) => {
                    return (
                      <div className="ml-3" key={index}>
                        {item}
                      </div>
                    );
                  })}
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col gap-4">
          {appListData.map((items) => {
            return (
              <li
              className="hover: cursor-pointer flex flex-col gap-4"
                onClick={() => handleAppListExpand(items.id, items.isApplicationExpand)}
                key={items.id}
              >
                {items.title}
                {items.isApplicationExpand &&
                  items.sublist.map((item, index) => {
                    return (
                      <p key={index} className="ml-3">
                        <span>
                          <i className={`bi bi-${item.icon}`}></i>
                        </span>{" "}
                        {item.title}
                      </p>
                    );
                  })}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
