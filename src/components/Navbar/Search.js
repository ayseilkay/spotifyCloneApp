import { Icon } from 'Icon'
import React from 'react'

function Search() {
  return (
    <div className="mr-auto ml-4 relative" >
        <label htmlFor='search-input' className='text-black text-opacity-20 w-12 h-10 flex items-center rounded-3xl justify-center absolute top-0 left-0 px-2'>     
       <Icon size={24} name="search"/>
        </label>
        <input type={"text"} id="search-input" style={{width:"364px", outline:"none",opacity:"20"}} className='h-10 pl-10 outline-none bg-white rounded-3xl  text-sm text-black  placeholder-black/50 max-w-full max-w-[22.75rem]' placeholder='Artists, songs, or podcasts'></input>
    </div>
  )
}

export default Search