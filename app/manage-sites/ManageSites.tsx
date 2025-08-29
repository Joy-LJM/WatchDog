'use client'

import React, { useState } from 'react'


export default function ManageSites() {
  const [site, setSite] = useState("")
  const [siteList, setSiteList] = useState<string[]>([])
  const handleSiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setSite(e.target.value)
  }
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!site.trim()) return;
    setSite("")
    setSiteList(pre => [...pre, site.trim()])
  }
  return (
    <div className="flex w-auto">
      <div className="m-8 text-left border rounded-sm border-gray-200 p-10 w-lg">
        <h1 className="font-bold">Add a site</h1>
        <form onSubmit={handleAdd}>
          <input type="text" placeholder="youtube.com"
            value={site}
            onChange={handleSiteChange}
            required
            className="border valid:border-sky-300 focus:outline-none pl-1 py-2 rounded-sm my-5 text-black w-xs"
          />
          <button className="transition delay-150 duration-300 ease-in-out bg-sky-500 text-white hover:bg-sky-700  cursor-pointer rounded-sm p-2 px-5  ml-3" onClick={handleAdd}>Add</button>
        </form>
        {siteList.length > 0 && (
          <div className="mt-2 space-y-4">
            {siteList.map((s, idx) => (
              <div
                key={idx}
                className="border rounded-md border-gray-200 p-4 flex justify-between"
              >
                <h3 className="font-medium">{s}</h3>
                <div className="text-sm text-gray-500">2 hrs</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
