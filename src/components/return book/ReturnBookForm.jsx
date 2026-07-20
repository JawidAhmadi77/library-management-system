import React from 'react'

export default function StudentForm() {
  return (
    <div className='flex w-full justify-center'>
        <form action="" className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8">
          <h1 className='font-bold text-2xl text-center text-gray-700 mb-6'>Add Issue Book</h1>
           <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>

             <div class="mb-4">
                    <label
                        for="Department"
                        class="block mb-2 text-sm font-medium text-gray-700">
                    Student Name
                    </label>

                    <select name="Department" id="" className=' cursor-pointer w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 '>
                        <option value="" >Ahmad</option>
                        <option value="" >Qasim</option>
                        <option value="" >Noorullah</option>
                    </select>
                    </div>

                     <div class="mb-4">
                    <label
                        for="Department"
                        class="block mb-2 text-sm font-medium text-gray-700">
                    Book Name
                    </label>

                    <select name="Department" id="" className=' cursor-pointer w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 '>
                        <option value="" >Python</option>
                        <option value="" >Django</option>
                        <option value="" >React.js</option>
                    </select>
                    </div>

    

                    <div class="mb-4">
                    <label
                        for="Issue Date"
                        class="block mb-2 text-sm font-medium text-gray-700">
                    Issue Date
                    </label>

                    <input
                        id="Issue Date"
                        type="date"
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    

                    <div class="mb-4">
                    <label
                        for="Return Date"
                        class="block mb-2 text-sm font-medium text-gray-700">
                    Return Date
                    </label>

                    <input
                        id="Return Date"
                        type="date"
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    
           </div>
           <button
                    className="w-full mt-6 bg-white text-indigo-600 cursor-pointer hover:bg-indigo-600 hover:text-white py-3 rounded-xl font-semibold shadow-lg border-indigo-400 border hover:scale-[1.02] transition duration-300"
                >
                    Return Book
                </button>
        </form>

    </div>
  )
}
