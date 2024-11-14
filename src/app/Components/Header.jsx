'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'


export function Header() {
  const pathname = usePathname()

  return (
    // <nav>
    //   <div className='flex justify-center items-center gap-10 bg-blue-300 h-16 font-bold '>

    //     <Link className={`link ${pathname === '/' ? 'active underline' : ''}`} href="/">
    //       Home
    //     </Link>

    //     <Link className={`link ${pathname === '/Dashboard' ? 'active underline' : ''}`} href="/Dashboard">
    //       Dashboard
    //     </Link>


    //     <Link
    //       className={`link ${pathname === '/About' ? 'active underline' : ''}`}
    //       href="/About"
    //     >
    //       About
    //     </Link>
    //     <Link
    //       className={`link ${pathname === '/Blog' ? 'active underline' : ''}`}
    //       href="/Blog"
    //     >
    //       Blog
    //     </Link>
    //     <Link
    //       className={`link ${pathname === '/Contact' ? 'active underline' : ''}`}
    //       href="Contact"
    //     >
    //       Contact Us
    //     </Link>

    //   </div>
    // </nav>




<header className="text-gray-600 body-font bg-blue-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Hammad</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
      <Link className={`link ${pathname === '/' ? 'active underline' : ''} mr-5 hover:text-gray-900`} href={'/'} >Home</Link>
      <Link className={`link ${pathname === '/Dashboard' ? 'active underline' : ''} mr-5 hover:text-gray-900`} href={'/Dashboard'} >Dashboard</Link>
      <Link className={`link ${pathname === '/About' ? 'active underline' : ''} mr-5 hover:text-gray-900`} href={'/About'} >About</Link>
      <Link className={`link ${pathname === '/Blog' ? 'active underline' : ''} mr-5 hover:text-gray-900`} href={'/Blog'} >Blog</Link>
      <Link className={`link ${pathname === '/Contact' ? 'active underline' : ''} mr-5 hover:text-gray-900`} href={'/Contact'} >Contact</Link>
      <Link className={`link ${pathname === '/Quotes' ? 'active underline' : ''} mr-5 hover:text-gray-900`} href={'/Quotes'} >Quotes</Link>

    </nav>
    <Link href={'/Signup'}>

    <button class="cursor-pointer group relative flex gap-1.5 px-4 py-2 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
      Login
      <div class="absolute opacity-0 -bottom-full rounded-md py-0 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
        Login
      </div>
    </button>
    </Link>
  </div>
</header>
  )
}
