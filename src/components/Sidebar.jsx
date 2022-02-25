import React, { useState } from "react";
import MenuData from "../sidebarMenu.json";

const Sidebar = () => {
  const [menuData, setMenuData] = useState(MenuData);

  const handleExpand = (id, isExpand, menuTitle) => {
    const menuObjData = {...menuData};
    menuObjData[menuTitle][id].isExpand = !isExpand;
    setMenuData(menuObjData);
  };
  

  return (
    <div className="w-56 h-max min-h-screen bg-white pb-3 hidden md:block">
      <div className="flex flex-col items-center border-b pb-3 border-black">
        <div className="bg-gray-300 rounded-full h-12 w-12 flex flex-col justify-center mx-auto mt-3 text-white text-2xl">
          <i className="bi bi-person-fill self-center"></i>
        </div>
        <h1 className="mt-3">demo@devias.io</h1>
        <h1 className="text-xs text-indigo-600">your tier: premium</h1>
      </div>
      <nav className="ml-2 mt-3 flex flex-col gap-4">
        {Object.keys(MenuData).map((menu) => {
          return (
            <div>
              <h1>{menu}</h1>
              <ul className="ml-3 mt-3 flex flex-col gap-4">
                {MenuData[menu].map((data) => {
                  return (
                    <li
                      key={data.id}
                      onClick={() =>
                        handleExpand(data.id, data.isExpand, menu)
                      }
                      className="flex flex-col gap-4 hover:cursor-pointer"
                    >
                      <p>
                        <span>
                          <i className={`bi bi-${data.icon}`}></i>
                        </span>{" "}
                        {data.listName}
                      </p>
                      {data.isExpand &&
                        data.sublist.map((item, index) => {
                          return (
                            <div
                              onClick={(e) => e.stopPropagation()}
                              className="ml-3"
                              key={index}
                            >
                              {item}
                            </div>
                          );
                        })}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

       
      </nav>
    </div>
  );
};

export default Sidebar;
