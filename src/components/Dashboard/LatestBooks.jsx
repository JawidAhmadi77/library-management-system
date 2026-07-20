import React from 'react'
import { latestBooks } from '../../data/DashboardData'
import { NavLink } from 'react-router-dom'
import {  ArrowRightIcon } from '@heroicons/react/24/solid'

export default function LatestBooks() {

  
  return (
    <div>
      <h1 className='md:text-2xl text-xl text-center font-bold py-6 text-gray-800'>Latest Books</h1>
      <div className='border bg-white rounded-2xl shadow-md border-gray-100 '>

        <table className='w-full border-collapse'>
          <thead className=''>
            <tr className='border-b flex justify-between py-2 px-6 bg-gray-100 rounded-lg'>
              <th className='text-left py-3'>ID</th>
              <th className='text-left py-3'>TITLE</th>
              <th className='text-left py-3'>AUTHOR</th>
              <th className='text-left py-3'>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {latestBooks.map((data) =>{ 
            return (
                <div className=''>
            <tr key={data.id} className='border-b hover:bg-gray-100 flex py-2 px-6 justify-between'>
              <th className='py-3 font-semibold text-gray-600'>{data.id}</th>
              <th className='py-3 font-semibold text-gray-600'>{data.title}</th>
              <th className='py-3 font-semibold text-gray-600'>{data.author}</th>
              <th className={`px-3 font-semibold  pt-3 rounded-full text-center text-sm ${data.status === 'Available' ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700 "}`}>{data.status}</th>
            </tr>
            </div>
            )})}
              </tbody>
              
        </table>

      <div className='flex my-5 justify-center items-center text-blue-600 font-semibold hover:underline cursor-pointer'>
        <NavLink to="/" />
        <span>View All </span>
        <ArrowRightIcon className='h-5 w-5' />
      </div>
      </div>
    </div>
  ) 
}
