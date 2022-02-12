import React from 'react'

const Navigation = () => {
  return (
    <div className="h-14 bg-indigo-600 flex items-center justify-between">
        <div className='bg-white rounded-full h-8 w-8 ml-5'>
            <span className='text-indigo-600 text-2xl flex'><i className="bi bi-caret-right mx-auto my-auto"></i></span>
        </div>
        <nav className='mr-5'>
            <ul className='flex gap-5 list-none'>
                <li className='text-white'><a><i className='bi bi-search'></i></a></li>
                <li className='text-white'><a><i className='bi bi-people'></i></a></li>
                <li className='text-white'><a><i className='bi bi-bell'></i></a></li>
                <li className='text-white'><a><i className='bi bi-gear'></i></a></li>
                <div className='flex'>
                	<div className='bg-gray-400 flex rounded-full w-7 h-7'>
                		<a className=' mx-auto my-auto'><i className="bi bi-person"></i></a>
               	 	</div>
                	<a href='/' className='ml-2 text-white'>demo@devias.io</a>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation;