import spotifyLogo from 'components/img/logo.svg'
import { Icon } from 'Icon'
import React from 'react'
import DownloadApp from './Sidebar/DownloadApp'
import Menu from './Sidebar/Menu'
import Playlist from './Sidebar/Playlist'

function Sidebar() {
  return (
    <aside className='w-60 pt-6 flex flex-col bg-black '>
        <a href='#' className='mb-7 px-6'>
        <img src={spotifyLogo} className='h-10 '></img>
        </a>
        <Menu/>
        <nav className='mt-6 '>
            <ul >
                <li > 
                    <a href="#" className='py-2 px-6 flex text-sm group text-link font-semibold hover:text-white'>
                        <span className = 'h-6 w-6 flex items-center justify-center mr-4  bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black'> 
                            <Icon name = "playlist" size = {12}/>
                        </span>Çalma Listesi Oluştur
                    </a>
                </li>
                <li >
                    <a href="#" className = 'py-2 px-6 flex text-sm group text-link font-semibold hover:text-white'>
                        <span className = 'h-6 w-6 flex items-center justify-center mr-4  bg-gradient-to-br from-purple-500 text-white rounded-sm to-blue-300 opacity-70  group-hover:opacity-100'> 
                            <Icon name = "songs" size = {12}/>
                        </span>Beğenilen Şarkılar
                    </a>
                </li>
            </ul>
        </nav>
        <Playlist/>
        <DownloadApp/>
    </aside>
  )
}

export default Sidebar