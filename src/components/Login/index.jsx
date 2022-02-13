import React from 'react'
import { loginUrl } from '../../spotify'
import Logo from '../icons/Logo'
import styles from './styles.module.css'

export default function Login () {
  return (
    <div className={styles.wrapper}>
      <Logo width={300} />
      <a className={styles.login} href={loginUrl}>Login with Spotify</a>

    </div>
  )
}
