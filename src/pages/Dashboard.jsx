import React from 'react'
import StatCard from '../components/Dashboard/StatCard'
import RecentActivity from '../components/Dashboard/RecentActivity'
import LatestBooks from '../components/Dashboard/LatestBooks'

export default function Dashboard() {
  return (
    <div>
        <div>
            <h1 className='text-xl sm:text-3xl text-center sm:text-left font-bold text-gray-800 ps-8'>Welcome Back, Ahmad</h1>
            <p className='mt-2 text-gray-500 text-center sm:text-left ps-8'>Manage your library easily and keep track of books and students.</p>
        </div>
        <div>
            <StatCard />
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <RecentActivity />
                <LatestBooks />
            </div>
        </div>
    </div>
  )
}
