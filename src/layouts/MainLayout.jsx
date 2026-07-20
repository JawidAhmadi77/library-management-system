import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import { Outlet } from "react-router-dom";



export default function MainLayout(){
return(
<div className="flex min-h-screen">
<Sidebar/>
<div className=" flex-1 lg:ml-72  overflow-hidden">
<Navbar/>

<main className="p-12">
    <Outlet />
    
</main>
</div>
</div>
)
}