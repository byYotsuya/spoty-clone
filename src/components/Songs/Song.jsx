import React from 'react'
import { milisegundosAMinutosYSegundos } from '../durationFormat'

import styles from './styles.module.css'

export default function Song ({ index, name, artists, album, duration, addedAt }) {
  const time = ((duration % (1000 * 60 * 60)) / (1000 * 60)) / 1.1

  return (
    <div className={styles.song}>
      <p>{index}</p>
      <h4>
        <figure>
          <img src={album?.images[0].url} alt={album.name} />
        </figure>
        <div className={styles.data_title}>
          <p>{name}</p>
          <span>
            {artists.map(artist => artist.name).join(', ')}
          </span>
        </div>
      </h4>
      <h4>{album.name}</h4>
      <h4>
        {
          milisegundosAMinutosYSegundos(duration)
        }
      </h4>
    </div>
  )
}
