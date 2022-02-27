import { setSideBar } from 'components/stores/player'
import { Icon } from 'Icon'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SidebarCover() {
    const dispatch = useDispatch()
    const {current} = useSelector(state => state.player)
  return (
    <div className='group'>
        <button onClick={()=>dispatch(setSideBar(false))} className='w-6 h-6 bg-black opacity-0 group-hover:opacity-100 hover:scale-[1.06] -rotate-90 rounded-full absolute top-1 right-1  flex items-center justify-center mr-4'>
                                  <Icon name={"arrowIcon"} size={24} />
                                </button>
        <img src={current.image} className='w-full h-full object-cover sticky'></img>
        
    </div>
  )
}

export default SidebarCover