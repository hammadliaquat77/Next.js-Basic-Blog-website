import React from 'react'

function QuoteCard({author, quote}) {
  return (
    <div className='p-5 w-full border m-4 border-blue-400  text-center'>
        <h1 className='font-semibold text-2xl'>{quote}</h1>
        <h1 className='font-normal text-xl'> quote by <span>{author}</span></h1>
    </div>
  )
}

export default QuoteCard