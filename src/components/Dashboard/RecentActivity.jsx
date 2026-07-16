import React from 'react'

export default function RecentActivity() {
  return (
    <div className='p-6'>
      <h1 className='font-bold  text-xl sm:text-2xl text-center pb-6'>Recent Activity</h1>
      <div className='border border-gray-200 rounded-xl shadow-xl pb-10 ps-4 w-full'>
        <ul className='sm:ps-4 ps-2 pt-8 cursor-pointer '>
          <li className='font-bold text-sm sm:text-md sm:text-base'>Ahmad borrowed React Book</li>
          <p className='text-sm text-gray-500 border-b border-gray-200 pb-4'>2 min ago</p>
        </ul>

        <ul className='py-6 sm:ps-4 ps-2 cursor-pointer '>
          <li className='font-bold text-sm sm:text-md sm:text-base'>Seyar returned Django Book</li>
          <p className='text-sm text-gray-500 border-b border-gray-200 pb-4'>1 hour ago</p>
        </ul>

        <ul className='ps-2 sm:ps-4 cursor-pointer '>
          <li className='font-bold text-sm md:text-md sm:text-base'>New Book added</li>
          <p className='text-sm text-gray-500'>30 min ago</p>
        </ul>
      </div>
    </div>
  )
}
