import React from 'react'

import styles from './styles.module.css'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import Header from '../Header'

export default function Layout ({ children }) {
  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Header />

        {children}
      </div>
      <Footer />

    </div>
  )
}
