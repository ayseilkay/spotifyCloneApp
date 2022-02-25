import { Icon } from 'Icon'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setCurrent } from './stores/player'

function SongItem({item}) {
    const imageStyle = item=>{
        switch(item.type){
            case 'artist':
                return 'rounded-full'
            case 'podcast':
                return 'rounded-xl'
            default:
                return 'rounded';
        }
    }

    const {current} = useSelector(state => state.player)
    const dispatch = useDispatch()
    const updateCurrent = ()=>{
        dispatch(setCurrent(item))
    }
    return (
    <NavLink key={item.id} to={"/"} className="bg-footer p-4 rounded hover:bg-active group">
    <div className='pt-[100%] relative mb-4'>
    <img src={item.image} className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)} `}></img>
    <button onClick={updateCurrent}  className='w-10 h-10 rounded-full shadow-2xl bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2  items-center justify-center hidden hover:scale-[1.09] '>
        <Icon name={current?.id === item.id ? 'pause' : 'play'} size="16"/>
    </button>
    </div>
   <h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold'>  {item.title}</h6>
     <p className='line-clamp-2 text-link text-sm mt-1'>
         {item.description}
     </p>
 </NavLink>
  )
}

export default SongItem