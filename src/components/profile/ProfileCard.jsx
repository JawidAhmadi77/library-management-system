import React from 'react'


import { stats } from '../../data/ProfileData';
// import PersonalInfo from './PersonalInfo';
import { profile } from '../../assets/images/images';
// import PersonalInfo from './PersonalInfo';

export default function ProfileCard() {
  return (
    <div>
      

<div className="bg-gradient-to-br from-indigo-900 via-indigo-900 to-purple-800 p-8 flex items-center">

  <div className="w-full">

    <div className="bg-white rounded-3xl shadow-2xl p-8 text-center hover:shadow-xl transition-all duration-300">

      <div className="relative w-fit mx-auto">

        <img
          src={profile}
          alt="Profile"
          className="w-36 h-36 rounded-full border-4 border-white shadow-xl object-cover"
        />

        <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-500 border-2 border-white"></span>

      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-6">
        Ahmad Jawid Ahmadi
      </h2>

      <p className="text-indigo-600 font-semibold">
        Administrator
      </p>

      <div className="flex justify-center items-center gap-2 mt-3">

        <div className="w-3 h-3 rounded-full bg-green-500"></div>

        <span className="text-green-600 font-medium">
          Online
        </span>

      </div>

      <button
        className="mt-8 w-full bg-indigo-600 hover:bg-white hover:text-indigo-600
        text-white py-3 rounded-xl font-semibold
        transition-all duration-300
        hover:scale-105 active:scale-95 border border-indigo-600 cursor-pointer"
      >
        Change Photo
      </button>

      <button
        className="mt-3 w-full border border-indigo-600
        text-indigo-600
        hover:bg-indigo-600
        hover:text-white
        py-3 rounded-xl
        font-semibold cursor-pointer
        transition-all duration-300
        hover:scale-105 active:scale-95"
      >
        Edit Profile
      </button>

      {/* Library Information */}

      <div className="mt-8 border-t pt-6">

        <h3 className="font-bold text-gray-800 text-lg">
          Library Information
        </h3>

        <div className="mt-4 space-y-2 text-gray-600 text-sm">

          <p>📚 Library Management System</p>

          <p>📍 Kabul, Afghanistan</p>

          <p>📅 Joined : July 2026</p>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-2 gap-4 mt-8">

        {stats.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >

              <Icon className="w-8 h-8 text-indigo-600 mx-auto mb-2" />

              <h2 className="text-3xl font-bold text-gray-800">

                {item.value}

              </h2>

              <p className="text-sm text-gray-500 mt-1">

                {item.title}

              </p>

            </div>

          );

        })}

      </div>

      {/* Quick Actions */}

      <div className="mt-10">

        <h3 className="text-xl font-bold text-gray-800 mb-5">
          Quick Actions
        </h3>

        <div className="grid grid-cols-2 gap-3">

          <button className="bg-indigo-600 hover:bg-white border border-indigo-600 hover:text-indigo-600 cursor-pointer text-white rounded-xl py-3 transition-all duration-300 hover:scale-105">
            Add Book
          </button>

          <button className="bg-green-600 hover:bg-white border border-green-600 hover:text-green-600 cursor-pointer text-white rounded-xl py-3 transition-all duration-300 hover:scale-105">
            Add Student
          </button>

          <button className="bg-orange-500 hover:bg-white border border-orange-600 hover:text-orange-600 cursor-pointer text-white rounded-xl py-3 transition-all duration-300 hover:scale-105">
            Issue Book
          </button>

          <button className="bg-red-500 hover:bg-white  border border-red-600 hover:text-red-600 cursor-pointer text-white rounded-xl py-3 transition-all duration-300 hover:scale-105">
            Return Book
          </button>

        </div>

      </div>

      <p className="text-xs text-gray-400 mt-10">
        © 2026 Library Management System
      </p>

    </div>

  </div>

</div>

</div>

      )
}
    
