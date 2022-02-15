/* eslint-disable camelcase */
import React from 'react'
import usePlaylist from '../../hooks/usePlaylist'
import { Time } from '../icons'

import styles from './styles.module.css'
import Song from './Song'

export default function Songs ({ id }) {
  const { tracks } = usePlaylist(id)

  console.log(tracks)

  return (
    <div className={styles.wrapper}>
      <div className={styles.songs_header}>
        <h4>#</h4>
        <h4>TITLE</h4>
        <h4>ALBUM</h4>
        <h4><Time size={25} /></h4>
      </div>

      <div className={styles.songs_list}>
        {
          tracks?.map(({ added_at, track }, index) => (
            <Song
              key={index}
              index={index}
              name={track.name}
              artists={track.artists}
              album={track.album}
              duration={track.duration_ms}
              addedAt={added_at}
            />
          ))
        }
      </div>

    </div>
  )
}
