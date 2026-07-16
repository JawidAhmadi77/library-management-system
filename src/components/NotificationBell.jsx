import { BellIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";


const notifications=[
 {
 id:1,
 Text:"New book add : Network",
 isRead:false,
 time:"2 min ago"
 },
 {
 id:2,
 Text:"Book due tomorrow",
 isRead:false,
 time:"Today"
 },
 {
 id:3,
 Text:"Ahmad returned a book",
 isRead:false,
 time:"1 hour ago"
 }
];


export default function NotificationBell(){

 const [isOpen,setIsOpen]=useState(false);


 const unreadCount =
 notifications.filter(n=>!n.isRead).length;


 return(

<div className="relative">

<BellIcon
className="h-6 w-6 cursor-pointer text-gray-600"
onClick={()=>setIsOpen(!isOpen)}
/>


{unreadCount>0 && (

<span className=" absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
{unreadCount}
</span>
)}



{
isOpen && (

<div className=" absolute right-0 mt-3 w-72 max-w-[90vw] bg-white shadow-xl rounded-xl border border-gray-200 z-50">

<h1 className="font-bold text-lg p-4 border-b">Notifications</h1>
{
notifications.map(n=>(

<div
key={n.id}
className="p-4 border-b">

<p className="font-medium text-sm">
{n.Text}
</p>

<p className="text-gray-400 text-xs">
{n.time}
</p>
</div>
))}
</div>
)}
</div>
)}