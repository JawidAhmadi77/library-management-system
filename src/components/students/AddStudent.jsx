import { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';
import StudentForm from "./StudentForm"

export default function AddStudent() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

    if (!search) { setBooks([]); return; }

    fetch(`http://localhost:5000/books?search=${search}`)
      .then(res => res.json())
      .then(data => setBooks(data));

  }, [search]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div className="bg-white rounded-3xl shadow-lg border-b border-gray-100 p-6">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          <div className="flex flex-wrap justify-center lg:justify-start gap-5">

            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-3 rounded-xl border hover:border-indigo-400 bg-indigo-600 hover:text-indigo-600 transition-all duration-300 hover:bg-white text-white font-semibold shadow-lg hover:scale-105 cursor-pointer"
            >
              Add Student ➕
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 rounded-xl border hover:border-bg-red-400 bg-red-500 text-white font-semibold shadow-lg cursor-pointer hover:scale-105 duration-300 transition-all hover:bg-white hover:text-red-600"
            >
              Cancel
            </button>

          </div>

          <div className="w-full lg:w-auto">

            <div className="relative w-full md:w-96">

              <MagnifyingGlassIcon
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 text-gray-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Student..."
                className="w-full rounded-full bg-gray-100 py-3 pl-12 pr-5 border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />

            </div>

          </div>

        </div>

        <div className="mt-8 flex justify-center lg:justify-start">

          {isOpen && (
            <StudentForm />
          )}

        </div>

      </div>

    </div>
  )
}