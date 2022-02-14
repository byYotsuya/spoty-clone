import React from 'react'
import { useParams } from 'react-router-dom'
import PlaylistHeader from '../components/PlaylistHeader'

export default function PlaylistPage () {
  const { id } = useParams()

  return (
    <PlaylistHeader id={id} />

  )
}
