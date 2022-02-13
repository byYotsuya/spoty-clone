import React from 'react'

import styles from './styles.module.css'

export default function SidebarItem ({ title }) {
  return (
    <p className={styles.item}>
      {title}
    </p>
  )
}
