import Image from "next/image"

import loadingimg from '../../public/Loading1.png' 

export default function Loading() {
    
    return(
        <div className="my-5 justify-center flex">
        <Image src={loadingimg} alt="Loading..." width={100} height={100} />
        </div>
       )    
  }