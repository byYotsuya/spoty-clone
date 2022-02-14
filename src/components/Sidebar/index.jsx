import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistsState } from '../../recoil/atoms'
import { Home, Search, Library } from '../icons'
import Created from '../icons/Created'
import Liked from '../icons/Liked'
import Logo from '../icons/Logo'
import CustomLink from './CustomLink'
import SidebarItem from './SidebarItem'
import styles from './styles.module.css'

export default function Sidebar () {
  const playlists = useRecoilValue(playlistsState)

  const color = {
    color: '#b3b3b3', size: 22
  }

  return (
    <nav className={styles.wrapper}>
      <div className={styles['link-wrapper']}>
        <a className={styles['link-nav']}><Logo width={130} /></a>
      </div>

      <div>
        <CustomLink icon={<Home {...color} />} title='Home' to='/' />
        <CustomLink icon={<Search {...color} />} title='Search' to='/search' />
        <CustomLink icon={<Library {...color} />} title='Your Library' to='/playlists' />

      </div>

      <div className={styles['songs-wrapper']}>
        <a className={styles['songs-link']}>
          <Created />
          <span>Create Playlist</span>
        </a>

        <a className={styles['songs-link']}>
          <Liked />
          <span>My Playlist</span>
        </a>
      </div>

      <div>
        <hr className={styles.divider} />
      </div>

      <div style={{ marginTop: '30px' }}>
        {playlists?.items?.map((playlist, index) => (
          <SidebarItem key={index} title={playlist.name} id={playlist.id} />
        ))}

        {/* <SidebarItem title='Rock' />
        <SidebarItem title='Pop' />
        <SidebarItem title='Hip-Hop' />
        <SidebarItem title='Jazz' /> */}

      </div>

    </nav>
  )
}
