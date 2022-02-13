import React from 'react'
import Marquee from 'react-fast-marquee'

import { FaPlayCircle } from 'react-icons/fa'
import { BsFillSkipStartFill, BsSkipEndFill } from 'react-icons/bs'
import { BiShuffle, BiRepeat } from 'react-icons/bi'

import { GiMicrophone } from 'react-icons/gi'
import { MdOutlineQueueMusic, MdDevicesOther } from 'react-icons/md'
import { CgVolume } from 'react-icons/cg'

import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

import styles from './styles.module.css'
export default function Footer () {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__left}>
        <img src='https://i.scdn.co/image/ab67616d0000485149caa4fc6f962057ba65576a' />
        <div>
          <Marquee gradientColor='none' speed={15}>
            <h4>Het??</h4>
          </Marquee>
          <p>gola</p>
        </div>
      </div>
      <div className={styles.footer__center}>
        <BiShuffle />
        <BsFillSkipStartFill />
        <FaPlayCircle size={30} />
        <BsSkipEndFill />
        <BiRepeat />
      </div>
      <div className={styles.footer__right}>
        <GiMicrophone />
        <MdOutlineQueueMusic />
        <MdDevicesOther />
        <CgVolume />
        <Slider />
      </div>
    </div>
  )
}
