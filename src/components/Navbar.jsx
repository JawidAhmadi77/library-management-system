import React,{useState,useEffect} from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import {useLocation} from "react-router-dom";
import NotificationBell from "./NotificationBell";
import NavbarProfile from "./NavbarProfile";


const pageTitles={
"/":"Dashboard",
"/Books":"Books",
"/Students":"Students",
"/IssueBooks":"Issue Books",
"/ReturnBooks":"Return Books",
"/Profile":"Profile",
"/Logout":"Logout"
};


export default function Navbar(){

const location=useLocation();


return(

<nav className=" w-full bg-white border-b shadow-sm flex items-center justify-between px-4 sm:px-8 py-4 gap-4">


<h1 className="font-bold text-lg sm:text-2xl sm:ps-8 ps-20">
{pageTitles[location.pathname]}
</h1>

<div className="flex gap-5">
<NotificationBell/>
<NavbarProfile/>
</div>
</nav>
)
}