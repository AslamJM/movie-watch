import React from 'react'

const HeaderItem = ({Icon,title}) => {
  return (
    <div className='flex flex-col items-center group cursor-pointer w-12 sm:w-20 text-[#94a3b8] hover:text-[#f8fafc]'>
      <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
      <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem