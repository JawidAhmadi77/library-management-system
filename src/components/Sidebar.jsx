import React, { useState } from "react";
import { logo } from "../assets/images/images";
import {
  HomeIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ArrowLeftStartOnRectangleIcon,
  ClipboardDocumentListIcon,
  ArrowUturnLeftIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-white/20 text-white rounded-lg font-bold px-4 py-3 flex items-center gap-3"
      : "px-4 py-3 flex items-center gap-3 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300";

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-white p-2 rounded-lg shadow-lg"
      >
        <Bars3Icon className="w-7 h-7 text-gray-800" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-80
        bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500
        text-white shadow-2xl
        transform transition-transform duration-300
        ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Close Button (Mobile) */}
        <div className="flex justify-end p-4 lg:hidden">
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="w-7 h-7" />
          </button>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-20 pt-4 sm:pt-16" />
          <h1 className="py-6 font-bold text-2xl text-center">
            Library Management
          </h1>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-2 px-5 py-0 sm:py-10 sm:px-8">
          <NavLink to="/" className={linkClass}>
            <HomeIcon className="h-6 w-6" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/Books" className={linkClass}>
            <BookOpenIcon className="h-6 w-6" />
            <span>Books</span>
          </NavLink>

          <NavLink to="/Students" className={linkClass}>
            <AcademicCapIcon className="h-6 w-6" />
            <span>Students</span>
          </NavLink>

          <NavLink to="/IssueBooks" className={linkClass}>
            <ClipboardDocumentListIcon className="h-6 w-6" />
            <span>Issue Books</span>
          </NavLink>

          <NavLink to="/ReturnBooks" className={linkClass}>
            <ArrowUturnLeftIcon className="h-6 w-6" />
            <span>Return Books</span>
          </NavLink>

          <NavLink to="/Profile" className={linkClass}>
            <UserCircleIcon className="h-6 w-6" />
            <span>Profile</span>
          </NavLink>

          <NavLink to="/Logout" className={linkClass}>
            <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}