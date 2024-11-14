import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Blogs'
}

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: 'Html Book',
      slug: 'page-structure',
      description: 'HTML stands for Hypertext Markup Language'
    },
    {
      id: 2,
      title: 'Css Book',
      slug: 'styling-structure',
      description: 'CSS stands for Cascading Style Sheets'
    },
    {
      id: 3,
      title: 'Js Book',
      slug: 'functionality-structure',
      description: 'JS stands for JavaScript'
    },
    {
      id: 4,
      title: 'R.js Book',
      slug: 'framework-work',
      description: 'React.js is a JavaScript framework for building user interfaces'
    },
    {
      id: 5,
      title: 'N.js Book',
      slug: 'components-base-work',
      description: 'Node.js stands for server-side JavaScript execution'
    },
  ]


return (
  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h1 className="text-6xl font-bold">Blogs</h1>

    <div>
        {
          blogs.map( (data)=> (
            <Link key={data.id} href={`/Blog/${data.slug}`}>
              <h1  className='py-2 border-2 border-gray-400 m-2 px-40 text-2xl'>
              {data.title}
              </h1>
              </Link>
          ))
        }
    </div>
  </div>
)
}
    