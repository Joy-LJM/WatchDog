"use client";
import { useState } from "react";

export default function Home() {
  const [minutes, setMinutes]=useState("")
  const handleSave=(e:React.ChangeEvent<HTMLInputElement>)=>{
    // const ms=parseInt(minutes)*60*1000
    setMinutes(e.target.value)
    
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>
         WatchDog
        </h1>
        <input type="number" placeholder="Enter minutes"
        value={minutes}
        onChange={handleSave}
        required
        className="border valid:border-green-500 focus:outline-none pl-1 py-2 rounded-sm" 
        />
        <button className="bg-sky-500 hover:bg-sky-700  cursor-pointer rounded-sm p-2 ">Save changes</button>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      @copyright Jiamin Luo 2025  
      
      </footer>
    </div>
  );
}
