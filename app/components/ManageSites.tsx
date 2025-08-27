import React, { useState } from 'react'

export default function ManageSites() {
    const [site, setSite]=useState("")

    const handleSiteChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      
      setSite(e.target.value)
    }
  const handleAdd = () => {
    console.log(site)

  }
  return (
      <div className="flex w-auto">
        <div className="m-8 text-left border rounded-sm border-gray-200 p-10 w-lg">
          <h1 className="font-bold">Add a site</h1>
          <div >
          <input type="text" placeholder="youtube.com"
          value={site}
          onChange={handleSiteChange}
          required
          className="border valid:border-sky-300 focus:outline-none pl-1 py-2 rounded-sm my-5 text-black w-xs" 
          />
          <button className="transition delay-150 duration-300 ease-in-out bg-sky-500 text-white hover:bg-sky-700  cursor-pointer rounded-sm p-2 px-5  ml-3" onClick={handleAdd}>Add</button>
          </div>
        </div>
  
       </div>
  )
}
