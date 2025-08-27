"use client";
import { useState } from "react";
import { Suspense } from "react";
import ManageSites from "./mange-sites/page";
import Dashboard from "./dashboard/page";
import Settings from "./settings/page";





export default function Home() {
  const [activeTab,setActiveTab]=useState("manageSites")

  return (
    <>
    <Suspense>
      <ManageSites/>
    </Suspense>
     
     {/* {activeTab==="manageSites" && } */}
     {activeTab==="dashboard" && <Dashboard/>}
     {activeTab==="settings" && <Settings/>}
  
     
    </>
  );
}
