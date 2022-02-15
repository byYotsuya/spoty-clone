import React from 'react'
import { useParams } from 'react-router-dom'
import PlaylistHeader from '../components/PlaylistHeader'

import Songs from '../components/Songs'

export default function PlaylistPage () {
  const { id } = useParams()

  return (
    <>
      <PlaylistHeader id={id} />
      <Songs id={id} key={id} />
    </>

  )
}
