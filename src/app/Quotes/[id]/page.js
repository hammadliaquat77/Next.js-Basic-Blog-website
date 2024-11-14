
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
export const metadata = {
  title: 'Quotes',
};


export default async function SinglQuote({params}) {
  let single = await fetch(`https://dummyjson.com/quotes/${params.id}`);
  single = await single.json();
  console.log('single==>', single);

  if (single.message) {
    NotFound()
  }

  return (
    <div className='p-10'>
      <h1 className='text-center text-5xl my-5 leading-[70px]'>{single.quote}</h1>
      <h1 className='font-thin text-center text-2xl'>quote by
         <span className='underline font-bold'>{single.author}</span></h1>
         <Link href={'/Quotes'} className='flex justify-center items-center text-3xl mt-16'>
         <Button variant='destructive' className='w-20' >Back</Button>
         </Link>
    </div>
  )
}

