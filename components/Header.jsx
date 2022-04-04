import React from 'react'
import HeaderItem from './HeaderItem'
import {HomeIcon,BadgeCheckIcon,CollectionIcon,LightningBoltIcon,SearchIcon,UserIcon} from '@heroicons/react/outline'

const Header = () => {
  return (
    <div className='flex flex-col sm:flex-row m-5 justify-between items-center sm:items-start h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl '>
            <HeaderItem title="HOME" Icon={HomeIcon}/>
            <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
            <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
            <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
            <HeaderItem title="SEARCH" Icon={SearchIcon}/>
            <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
        </div>
       <div className="flex">
            <h2 className='text-[#f8fafc] text-2xl font-mono italic tracking-widest '>Movie Watch</h2>
       </div>
    </div>
  )
}

export default Header