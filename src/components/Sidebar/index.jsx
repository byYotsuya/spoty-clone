import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistsState } from '../../recoil/atoms'
import Created from '../icons/Created'
import Home from '../icons/Home'
import Library from '../icons/Library'
import Liked from '../icons/Liked'
import Logo from '../icons/Logo'
import Search from '../icons/Search'
import CustomLink from './CustomLink'
import SidebarItem from './SidebarItem'
import styles from './styles.module.css'

export default function Sidebar () {
  const playlists = useRecoilValue(playlistsState)

  return (
    <nav className={styles.wrapper}>
      <div className={styles['link-wrapper']}>
        <a className={styles['link-nav']}><Logo width={130} /></a>
      </div>

      <div>
        <CustomLink icon={<Home />} title='Home' to='/' />
        <CustomLink icon={<Search />} title='Search' to='/search' />
        <CustomLink icon={<Library />} title='Your Library' to='/playlist' />

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
          <SidebarItem key={index} title={playlist.name} />
        ))}

        {/* <SidebarItem title='Rock' />
        <SidebarItem title='Pop' />
        <SidebarItem title='Hip-Hop' />
        <SidebarItem title='Jazz' /> */}

      </div>

    </nav>
  )
}
