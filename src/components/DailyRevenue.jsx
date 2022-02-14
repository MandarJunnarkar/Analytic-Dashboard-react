import React from "react";

const DailyRevenue = () => {
  return (
    <div className="bg-white h-24 w-auto flex p-8 justify-between items-center">
      <div>
        <h1 className='text-xs uppercase'>Today's Money</h1>
        <h1>$24000</h1>
      </div>
      <div className="bg-indigo-600 h-10 w-10 rounded-full text-white flex justify-center items-center"><span><i className="bi bi-currency-dollar"></i></span></div>
    </div>
  );
};

export default DailyRevenue;
