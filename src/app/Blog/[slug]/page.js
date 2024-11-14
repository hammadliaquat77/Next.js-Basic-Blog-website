export const metadata = {
  title: 'Quotes'
}



const blogs = [
  {
    id: 1,
    title: 'Html Book',
    slug: 'page-structure',
    description: 'HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.'
  },
  {
    id: 2,
    title: 'Css Book',
    slug: 'styling-structure',
    description: 'CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files (. css).'
  },
  {
    id: 3,
    title: 'Js Book',
    slug: 'functionality-structure',
    description: 'JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive. It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc.'
  },
  {
    id: 4,
    title: 'R.js Book',
    slug: 'framework-work',
    description: 'React is designed to create sophisticated user interfaces. It allows using HTML-like syntax within JavaScript code, enabling developers to create reusable components and write less code for UI implementation. React is widely used in web development due to the following features: Code Reusability.'
  },
  {
    id: 5,
    title: 'N.js Book',
    slug: 'components-base-work',
    description: 'Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.'
  },
]


console.log(blogs);


export default function BlogDetail({ params }) {
  
  
  const bloging = blogs.filter((data) => data.slug === params.slug);
  
  // console.log("bloging==>", bloging);
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {
        bloging.map((item) => {
          return (
            <div key={item.id}>
              <h1 className="text-4xl text-center mb-8 mt-7">{item.title}</h1>
              <p className="text-center w-[40vw] ">{item.description}</p>
            </div>
          );
        })
      }
    </div>
  );

}
