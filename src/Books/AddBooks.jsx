import React from 'react'

export default function AddBooks() {

    const formStyle =
        "w-full py-3 px-4 bg-gray-50 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300";

    return (
        <div className="w-full flex justify-center">

            <form
                action=""
                className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8"
            >

                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Add New Book
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div class="mb-4">
                    <label
                        for="Title"
                        class="block mb-2 text-sm font-medium text-gray-700">
                    Title
                    </label>

                    <input
                        id="Title"
                        type="Title"
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                   <div class="mb-4">
                    <label
                        for="Author"
                        class="block mb-2 text-sm font-medium text-gray-700">
                    Author
                    </label>

                    <input
                        id="Author"
                        type="Author"
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>


                    <div class="mb-4">
                    <label
                        for="Category"
                        class="block mb-2 text-sm font-medium text-gray-700">
                    Category
                    </label>

                    <input
                        id="Category"
                        type="Category"
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>


                    <div class="mb-4">
                    <label
                        for="Quantity"
                        class="block mb-2 text-sm font-medium text-gray-700">
                    Quantity
                    </label>

                    <input
                        id="Quantity"
                        type="Quantity"
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