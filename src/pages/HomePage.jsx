import React from 'react'
import { Link } from 'react-router-dom'
import Body from '../components/Body'

export default function HomePage () {
  return (
    <>
      <Link to='/login'>
        login
      </Link>

      <Body />
    </>
  )
}
