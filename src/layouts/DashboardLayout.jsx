import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";


export default function DashboardLayout(){
return(
<div className="flex min-h-screen">
<Sidebar/>
<div className=" flex-1 lg:ml-72  overflow-hidden">
<Navbar/>

<main className="p-12">
    <Dashboard />
</main>
</div>
</div>
)
}