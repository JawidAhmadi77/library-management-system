import {  AcademicCapIcon, ArrowUturnLeftIcon, BookOpenIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function StatCard() {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-8 gap-6 sm:gap-3'>
      <div className='p-8 border hover:shadow-lg hover:-translate-1 transition-all duration-300 border-gray-200 shadow-xl rounded-lg flex flex-col justify-center items-center'>
        <BookOpenIcon className='h-8 w-8 pb-3 text-indigo-800'/>
        <h1 className='font-bold text-sm sm:text-xl py-3 border-y border-gray-300'>Total Books</h1>
        <p className='text-center pt-3 font-bold text-lg'>1200</p>
      </div>

      <div className='p-8 border hover:shadow-lg hover:-translate-1 transition-all duration-300 border-gray-200 shadow-xl rounded-lg flex flex-col justify-center items-center'>
        <AcademicCapIcon className='h-8 w-8 pb-3 text-indigo-800'/>
        <h1 className='font-bold text-sm sm:text-xl py-3 border-y border-gray-300'>Total Students</h1>
        <p className='text-center pt-3 font-bold text-lg'>340</p>
      </div>

      <div className='p-8 border hover:shadow-lg hover:-translate-1 transition-all duration-300 border-gray-200 shadow-xl rounded-lg flex flex-col justify-center items-center'>
        <BookOpenIcon className='h-8 w-8 pb-3 text-indigo-800'/>
        <h1 className='font-bold text-sm sm:text-xl py-3 border-y border-gray-300'>Issue Books</h1>
        <p className='text-center pt-3 font-bold text-lg'>78</p>
      </div>

      <div className='p-8 border hover:shadow-lg hover:-translate-1 transition-all duration-300 border-gray-200 shadow-xl rounded-lg flex flex-col justify-center items-center'>
        <ArrowUturnLeftIcon className='h-8 w-8 pb-3 text-indigo-800'/>
        <h1 className='font-bold text-sm sm:text-xl py-3 border-y border-gray-300'>Returned Books</h1>
        <p className='text-center pt-3 font-bold text-lg'>520</p>
      </div>

    </div>
  )
}
