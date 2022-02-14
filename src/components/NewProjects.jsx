import React from 'react'

const NewProjects = () => {
  return (
    <div className="bg-white h-24 w-auto flex p-8 justify-between items-center">
      <div>
        <h1 className='text-xs uppercase'>New Projects</h1>
        <h1>12</h1>
      </div>
      <div className="bg-indigo-600 h-10 w-10 rounded-full text-white flex justify-center items-center"><span><i className="bi bi-folder"></i></span></div>
    </div>
  )
}

export default NewProjects;