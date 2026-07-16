import React, {useState} from "react";
import {
UserIcon,
Cog6ToothIcon,
ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/solid";
import {NavLink} from "react-router-dom";


export default function NavbarProfile(){

const [showProfile,setShowProfile]=useState(false);


return(

<div className="relative">

<UserIcon className="w-6 h-6 cursor-pointer text-gray-600" onClick={()=>setShowProfile(!showProfile)}/>


{
showProfile && (

<div className=" absolute right-0 top-10 w-72 max-w-[90vw] bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-50">


<div className="border-b pb-4">

<div className="flex gap-2">
<UserIcon className="w-5 h-5"/>
<b>Ahmad</b>
</div>

<p className="text-sm text-gray-500">
ahmad12@gmail.com
</p>
</div>
<div className="mt-3 space-y-2">


<NavLink
to="/Profile"
className="flex gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">

<UserIcon className="w-5"/>
My Profile
</NavLink>

<div className="flex gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
<Cog6ToothIcon className="w-5"/>
Setting
</div>
<div className="flex gap-3 p-3 hover:bg-red-50 text-red-500 rounded-lg cursor-pointer transition-all duration-200">
<ArrowRightStartOnRectangleIcon className="w-5"/>
Logout
</div>
</div>
</div>
)}
</div>
)
}