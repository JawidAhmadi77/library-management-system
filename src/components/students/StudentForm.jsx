import React from 'react'

export default function StudentForm() {
  return (
    <div className='flex w-full justify-center'>
        <form action="" className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8">
          <h1 className='font-bold text-2xl text-center text-gray-700 mb-6'>Add New Student</h1>
           <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div class="mb-4">
                    <label
                        for="Student Name"
                        class="block mb-2 text-sm font-medium text-gray-700">
                    Student Name
                    </label>

                    <input
                        id="Student Name"
                        type="Student Name"
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    <div class="mb-4">
                    <label
                        for="Student ID"
                        class="block mb-2 text-sm font-medium text-gray-700">
                    Student ID
                    </label>

                    <input
                        id="Student ID"
                        type="Student ID"
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                     <div class="mb-4">
                    <label
                        for="Department"
                        class="block mb-2 text-sm font-medium text-gray-700">
                    Department
                    </label>

                    <select name="Department" id="" className=' cursor-pointer w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 '>
                        <option value="" >NE</option>
                        <option value="" >AI</option>
                        <option value="" >CE</option>
                    </select>
                    </div>

                    <div class="mb-4">
                    <label
                        for="Phone"
                        class="block mb-2 text-sm font-medium text-gray-700">
                    Phone
                    </label>

                    <input
                        id="Phone"
                        type="Phone"
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    <div class="mb-4">
                    <label
                        for="Email"
                        class="block mb-2 text-sm font-medium text-gray-700">
                    Email
                    </label>

                    <input
                        id="Email"
                        type="Email"
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                     <div class="mb-4">
                    <label
                        for="Status"
                        class="block mb-2 text-sm font-medium text-gray-700">
                    Status
                    </label>

                    <select name="Status" id="" className=' cursor-pointer w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 '>
                        <option value="" >Available</option>
                        <option value="" >Issued</option>
                    </select>
                    </div>
                    
           </div>
           <button
                    className="w-full mt-6 bg-white text-indigo-600 cursor-pointer hover:bg-indigo-600 hover:text-white py-3 rounded-xl font-semibold shadow-lg border-indigo-400 border hover:scale-[1.02] transition duration-300"
                >
                    Save
                </button>
        </form>

    </div>
  )
}
