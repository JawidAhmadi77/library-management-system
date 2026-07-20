import React from 'react'
import { BookTableData } from '../data/Books'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'

export default function BookTable() {
  return (
    
    <div className="p-2 md:p-6">
        <div className="mb-2 text-center">
            <h2 className="text-2xl font-bold text-gray-800">
                Book List
            </h2>
        </div>

      <div className="overflow-x-auto shadow-xl rounded-xl mx-0 md:mx-8 mt-0 md:my-5">
        <table className="min-w-full border border-gray-200 ">
          <thead className="bg-gray-100">
            <tr className="border-b border-gray-300 text-xs md:text-base">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Author</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Quantity</th>
              <th className="p-4 text-center ">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {BookTableData.map((data) => {
              return (
                <tr
                  key={data.id}
                  className="border-b border-gray-300 hover:bg-gray-100 text-xs md:text-base "
                >
                  <td className="p-4">{data.id}</td>
                  <td className="p-4">{data.titel}</td>
                  <td className="p-4">{data.author}</td>
                  <td className="p-4">{data.category}</td>
                  <td className="p-4">{data.quantity}</td>
                  <td className={`p-1 text-center ${data.status === "Available" ? "bg-green-100 text-green-700 px-1 py-2 rounded-full text-sm" : "bg-red-100 text-red-700 px-1 py-1 rounded-full text-sm"}`}>{data.status}</td>

                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <button className="text-blue-600 hover:text-blue-900 cursor-pointer">
                        <PencilSquareIcon className="h-5 w-5" />
                      </button>

                      <button className="text-red-600 hover:text-red-900 cursor-pointer">
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}