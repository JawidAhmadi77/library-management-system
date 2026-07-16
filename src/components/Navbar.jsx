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

const [search,setSearch]=useState("");
const [books,setBooks]=useState([]);

const location=useLocation();


useEffect(()=>{

if(!search){ setBooks([]); return; }


fetch(`http://localhost:5000/books?search=${search}`)
.then(res=>res.json())
.then(data=>setBooks(data));
},[search]);

return(

<nav className=" w-full bg-white border-b shadow-sm flex items-center justify-between px-4 sm:px-8 py-4 gap-4">


<h1 className="font-bold text-lg sm:text-2xl sm:ps-8 ps-20">
{pageTitles[location.pathname]}
</h1>


<div className="hidden md:flex relative">

<MagnifyingGlassIcon
className="absolute left-3 top-3 w-5 text-gray-400"
/>

<input
value={search}
onChange={(e)=>setSearch(e.target.value)}
placeholder="Search Books..."
className=" w-72 rounded-full bg-gray-100 py-3 pl-10 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500" />
</div>
<div className="flex gap-5">
<NotificationBell/>
<NavbarProfile/>
</div>
</nav>
)
}