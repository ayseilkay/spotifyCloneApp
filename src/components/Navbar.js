import { Icon } from 'Icon'
import React from 'react'
import Auth from './Navbar/Auth'
import Navigation from './Navbar/Navigation'
import { useMatch } from "react-router-dom";
function Navbar() {
  const searchRoute = useMatch({path: '/search'})
  return (
    <nav className='h[3.75rem] flex items-center justify-between px-8'>
      <Navigation/>
      {
        searchRoute && (
          <div> search kısmındasın</div>
        )
      }
      <Auth/>
    </nav>
  )
}

export default Navbar