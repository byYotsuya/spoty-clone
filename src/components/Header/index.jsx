import React from 'react'

import { useRecoilValue } from 'recoil'
import { userState } from '../../recoil/atoms'
import { Search, User } from '../icons'

import styles from './styles.module.css'

export default function Header () {
  const user = useRecoilValue(userState)

  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <Search size={22} />
        <input type='text' placeholder='Search for Artists, Songs, Playlists' />
      </div>

      <div className={styles.header__right}>
        <figure>
          <div className={styles.image_container}>

            {
              (user?.images[0])
                ? <img className={styles.user__image} src={user.images[0].url} alt={user.display_name} />
                : <User />
          }
          </div>
        </figure>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}
