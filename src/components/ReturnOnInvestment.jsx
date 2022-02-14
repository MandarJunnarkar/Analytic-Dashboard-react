import React from 'react'

const ReturnOnInvestment = () => {
  return (
    <div className="bg-indigo-600 text-white h-24 w-auto flex p-8 justify-between items-center">
      <div>
        <h1 className='text-xs uppercase'>Roi per customer</h1>
        <h1>$25.50</h1>
      </div>
      <div className="bg-white h-10 w-10 rounded-full text-indigo-600 flex justify-center items-center"><span><i className="bi bi-currency-dollar"></i></span></div>
    </div>
  )
}

export default ReturnOnInvestment;