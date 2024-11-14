import Link from "next/link";


export default function Dashboradlayout({children}) {
  return (
    <section className="min-h-screen flex">
        <div className="w-1/4 border-2 border-r-blue-900">

     <Link href="/Dashboard/Setting">
        <button className=' py-2 rounded-md mt-1 bg-purple-100 hover:bg-purple-400 w-full text-2xl '>Setting</button>
      </Link>

      <Link href="/Dashboard/Profile">
        <button className='py-2 rounded-md mt-1 bg-purple-100 hover:bg-purple-400 w-full text-2xl'>Profile</button>
      </Link>
     
        </div>
           
        <div className="w-2/4 ">

        {children}
        </div>
        </section>
  )
}

