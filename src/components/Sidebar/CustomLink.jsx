import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

export default function CustomLink ({ icon, title, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? styles['is-active'] : ''}
    >
      <p className={styles.link}>
        {icon}
        <span className={styles['link-text']}>{title}</span>
      </p>
    </NavLink>
  )
}
