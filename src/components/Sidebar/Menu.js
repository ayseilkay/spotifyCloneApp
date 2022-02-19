import { Icon } from 'Icon'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className='px-2'>
        <ul className='flex flex-col'>
            <li>
                
                <NavLink activeClassName="bg-active text-white" exact="true"  to='/' className='bg-active text-white h-10 flex items-center text-sm font-semibold gap-x-4  text-link rounded hover:text-white px-4 '>
                <span><Icon name="home"/></span>Anasayfa
                </NavLink>
               
            </li>  
            <li>   
                <NavLink activeClassName="bg-active text-white"  to='/search' className=' h-10 flex items-center text-sm font-semibold gap-x-4  text-link rounded hover:text-white px-4'> 
                <span>
                    <Icon name="search"/>
                </span>Ara</NavLink>
            </li>  
            <li>  
                <NavLink  activeClassName="bg-active text-white"  to='/library' className='h-10 flex items-center text-sm font-semibold gap-x-4  text-link rounded hover:text-white px-4' >
                <span><Icon name="library"/></span>Kitaplığın
                    </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Menu