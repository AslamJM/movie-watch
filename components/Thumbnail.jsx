import React from 'react'
import Image from 'next/image'
import {ThumbUpIcon} from '@heroicons/react/outline' 

const Thumbnail = ({data}) => {
  const BASE_URL ='https://image.tmdb.org/t/p/original/'
  return (
    <div className='group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-[1.05] hover:z-50'>
        <Image layout="responsive" src={`${BASE_URL}${data.backdrop_path||data.poster_path}`} height={1080} width={1920}/>
        <div className='p-2'>
          <p className='truncate max-w-md'>{data.overview}</p>
          <h2 className='mt-2 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold'>{data.title||data.original_name}</h2>
          <p className='flex items-center opacity-0 group-hover:opacity-100'>{data.media_type&&`${data.media_type} .`}{" "}{data.release_date||data.first_air_date}{" "}<ThumbUpIcon className="h-5 mx-2"/>{data.vote_count}</p>
        </div>
    </div>
  )
}

export default Thumbnail