"use client";
import { useState } from "react";

import WatchDogLogo from "./components/WatchDogLogo";
import ManageSites from "./components/ManageSites";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";


const categories = [
  {
    name: 'Manage Sites',
   id:'manageSites',
   active:true
  },
  {
    name: 'Dashboard',
  id:'dashboard',
  },
  {
    name: 'Settings',
   id:'settings',
  },
]


export default function Home() {

  const [activeTab,setActiveTab]=useState("manageSites")

  const handleActiveTab=(id:string)=>{
    setActiveTab(id)
    console.log(id)
  }
  return (
    <div className="flex flex-col p-5 ">
      <main className="flex flex-col ">
       <div className="flex gap-20 justify-center items-center border-b border-blue-100">
        <WatchDogLogo/>
        <div className="flex flex-3">
          <ul className="flex gap-10 cursor-pointer">
            {categories.map(({name,id})=><li key={id} onClick={()=>handleActiveTab(id)} className={` py-2 px-5 text-gray-500 ${activeTab===id?"text-sky-500 border-b-2 border-sky-500":""}`}>{name}</li>)}
          
          </ul>
        </div>
       </div>
     {activeTab==="manageSites" && <ManageSites/>}
     {activeTab==="dashboard" && <Dashboard/>}
     {activeTab==="settings" && <Settings/>}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      @copyright Jiamin Luo 2025  
      
      </footer>
    </div>
  );
}
