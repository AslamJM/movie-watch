import requests from '../utils/requests'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router=useRouter()
  return (
    <div className='flex px-10 sm:px-20 text-xl sm:text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide relative'>
        {
            Object.entries(requests).map(([key,{title,url}])=><h2 className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-[#f8fafc] active:text-red-500 last:pr-24' key={key} onClick={()=>router.push(`/?genre=${key}`)}>{title}</h2>)
        }
        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#0f172a] h-10 w-1/12'/>
    </div>
  )
}

export default Navbar