import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

export default function SidebarItem ({ title, id }) {
  return (
    <Link to={`/playlist/${id}`} className={styles.item}>
      {title}
    </Link>
  )
}
