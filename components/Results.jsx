import React from 'react'
import Thumbnail from './Thumbnail'

const Results = ({results}) => {
  return (
    <div className='p-5 mt-2 sm:grid md:grid-cols-2 xl:grid-cols-3'>
        {
            results.map(r=><Thumbnail key={r.id} data={r}/>)
        }
    </div>
  )
}

export default Results