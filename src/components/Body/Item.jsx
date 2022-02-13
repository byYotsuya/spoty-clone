import React from 'react'
import styles from './styles.module.css'
export default function Item ({ title, image, url, description, id }) {
  return (
    <div className={styles.item_playlist}>
      <figure className={styles.image_playlist}>
        <img src={image} alt={title} />
      </figure>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 12 }}>PLAYLIST</p>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>

      </div>
    </div>
  )
}
