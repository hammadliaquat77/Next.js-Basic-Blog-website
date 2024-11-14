'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
import Image from 'next/image'


import errImg from '../../../src/public/error.png'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('error==>',error)
  }, [error])
 
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
    <Image src={errImg} width={200} height={200} className='mb-6'></Image>

      <h2 className='text-3xl font-semibold mb-2'>Something went wrong!</h2>
      <button className='text-2xl font-semibold '
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
          
        }
      >
        Try again
      </button>      
    </div>
  )
}