import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import SpotifyWebApi from 'spotify-web-api-js'
import { tokenState } from '../recoil/atoms'
import { getTokenFromUrl } from '../spotify'

const s = new SpotifyWebApi()

const usePlaylist = (id) => {
  const [tracks, setTracks] = useState(null)
  const token = useRecoilValue(tokenState)

  useEffect(() => {
    if (token) {
      s.setAccessToken(token)
      s.getPlaylist(id).then(data => {
        setTracks(data?.tracks?.items)
      })
    }
  }, [id])

  return {
    tracks
  }
}

export default usePlaylist
