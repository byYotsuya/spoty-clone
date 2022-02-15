import React from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Marquee from 'react-fast-marquee'
import { useRecoilValue } from 'recoil'
import { PlayCircle, SkipStart, SkipEnd, Shuffle, Repeat, QueueMusic, DevicesOther, Volume, Microphone } from '../icons'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import styles from './styles.module.css'
import { currentTrackState } from '../../recoil/atoms'

export default function Footer () {
  const { name, image, artists, id, isPlaying } = useRecoilValue(currentTrackState)
  // const track = useRecoilValue(currentTrackState)

  return (
    <div className={styles.footer}>
      <div className={styles.footer__left}>
        <img src={image} />
        <div>
          <Marquee gradientColor='none' speed={15}>
            <h4>
              {name}
            </h4>
          </Marquee>
          <p>
            {artists?.map(artist => artist.name).join(', ')}
          </p>
        </div>
      </div>
      <div className={styles.footer__center}>
        <Shuffle />
        <SkipStart />
        <PlayCircle size={30} />
        <SkipEnd />
        <Repeat />
      </div>
      <div className={styles.footer__right}>
        <Microphone />
        <QueueMusic />
        <DevicesOther />
        <Volume />
        <Slider />
      </div>
    </div>
  )
}
