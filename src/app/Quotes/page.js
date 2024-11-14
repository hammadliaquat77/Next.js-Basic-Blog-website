//Single Quotes work  

import Link from "next/link";
import QuoteCard from "../Components/QuoteCard";
import SinglQuote from "./[id]/page";

export const metadata = {
  title: 'Quotes',
};

const Quotes = async () => {
  let response = await fetch('https://dummyjson.com/quotes');
  let quote = await response.json();
    
  console.log('Quotes==>', quote);


  // Code not working Not found handling  Error handling
  // if (!quote.ok) {
  //  throw new Error('Api Not Found')
  // }

  // Access the 'quotes' array from the response object
  let quotesArray = quote.quotes;

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-6xl font-bold">Quotes</h1>
      {
        quotesArray.map((data) => (
          <Link key={data.id} href={`/Quotes/${data.id}`}>
          <QuoteCard  author={data.author} quote={data.quote} />
          </Link>
        ))
      }
    </div>
  );
};

export default Quotes;













// Random Quote Example
// import Link from "next/link";
// import QuoteCard from "../Components/QuoteCard";

// export const metadata = {
//   title: 'Quotes',
// };

// // 10 second refresh code 
// // export const revalidate = 5


// const Quotes = async () => {
//   // chache example
//   let response = await fetch('https://dummyjson.com/quotes/random' ,{cache : 'no-cache'});

//   // without chache
//   // let response = await fetch('https://dummyjson.com/quotes/random' ,);
//   let quote = await response.json();
    
//   console.log('Quotes==>', quote);

//   // Access the 'quotes' array from the response object
//   let quotesArray = quote.quotes;

//   return (
//     <div className="flex flex-col items-center justify-items-center min-h-screen p-8 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <h1 className="text-6xl font-bold">Quotes</h1>
//       {
//         // <QuoteCard  author={quote.author} quote={quote.quote} />
//         <Link key={quote.id} href={`/Quotes/${quote.id}`}>
//            <QuoteCard  author={quote.author} quote={quote.quote} />
//            </Link>
//       }
//     </div>
//   );
// };

// export default Quotes;
