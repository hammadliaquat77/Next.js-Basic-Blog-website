import Link from 'next/link'
import React from 'react'


export const metadata = {
  title: 'Dashboard'
}

export default function Dashboard() {



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-6xl font-bold">Dashboard</h1>
  
      {/* <div className='flex'>
     <Link href="/Dashboard/Setting">
        <button className='px-5 py-3 rounded-md bg-purple-400'>Setting</button>
      </Link>

      <Link href="/Dashboard/Profile">
        <button className='px-5 py-3 ml-4 rounded-md bg-purple-400'>Profile</button>
      </Link>
     </div>  */}

    </div>
    
  )
}
