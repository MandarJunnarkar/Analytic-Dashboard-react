import React from 'react'

const DashboardBreadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="" className="text-xs font-bold text-gray-500">
      <ul className="flex">
        <li className="after:content-['>'] after:p-3">
          <a href="#">Dashboard</a>
        </li>
        <li className="after:p-3">
          <a href="#">Reports</a>
        </li>
      </ul>
    </nav>
  )
}

export default DashboardBreadcrumb;