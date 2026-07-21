import React from "react";
import { profile } from "../../assets/images/images";



import {accountInfo, personalInfo} from '../../data/ProfileData'
import ProfileCard from "./ProfileCard";



export default function PersonalInfo() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 lg:p-8">

      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* ================= Left Side ================= */}

        <div className="p-8 lg:p-12">

          <h1 className="text-4xl font-bold text-gray-800 border-b pb-4">
            Profile
          </h1>

          <p className="text-gray-500 mt-4 leading-7">
            Manage your personal information, update your profile picture,
            and keep your account secure.
          </p>

          {/* Personal Information */}

          <h2 className="mt-10 mb-6 text-xl font-bold text-indigo-600 border-b pb-2">
            Personal Information
          </h2>

          <div className="space-y-5">

            {personalInfo.map((item, index) => {

              const Icon = item.icon;

              return (

                <div key={index}>

                  <label className="flex items-center gap-2 mb-2 font-semibold text-gray-700">

                    <Icon className="w-5 h-5 text-indigo-600" />

                    {item.label}

                  </label>

                  <input
                    type="text"
                    value={item.value}
                    readOnly
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3
                    text-gray-600
                    hover:border-indigo-500
                    focus:ring-2
                    focus:ring-indigo-500
                    outline-none
                    transition-all duration-300"
                  />

                </div>

              );

            })}

          </div>

          {/* Account Information */}

          <h2 className="mt-10 mb-6 text-xl font-bold text-indigo-600 border-b pb-2">
            Account Information
          </h2>

          <div className="space-y-5">

            {accountInfo.map((item, index) => {

              const Icon = item.icon;

              return (

                <div key={index}>

                  <label className="flex items-center gap-2 mb-2 font-semibold text-gray-700">

                    <Icon className="w-5 h-5 text-indigo-600" />

                    {item.label}

                  </label>

                  <input
                    type="text"
                    value={item.value}
                    readOnly
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3
                    text-gray-600
                    hover:border-indigo-500
                    focus:ring-2
                    focus:ring-indigo-500
                    outline-none
                    transition-all duration-300"
                  />

                </div>

              );

            })}

          </div>

          <button
            className="w-full mt-10 bg-indigo-600 hover:bg-white hover:text-indigo-600
            text-white py-3 rounded-xl font-semibold
            transition-all duration-300 cursor-pointer border border-indigo-600
            hover:scale-105 active:scale-95"
          >
            Update Profile
          </button>

        </div>
        <ProfileCard />
</div>
</div>
       )}