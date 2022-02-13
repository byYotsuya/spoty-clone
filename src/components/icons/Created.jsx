import React from 'react'
import styles from './styles.module.css'

export default function Created (props) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={styles.created}>
      <svg {...props} role='img' height='12' width='12' aria-hidden='true' viewBox='0 0 16 16' className='Svg-sc-1bi12j5-0 hDgDGI'><path d='M14 7H9V2H7v5H2v2h5v5h2V9h5z' /><path fill='none' d='M0 0h16v16H0z' style={{ strokeWidth: '0.5px' }} /></svg>
    </div>
  )
}
