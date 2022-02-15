import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import SpotifyWebApi from 'spotify-web-api-js'
import { currentTrackState, playlistsState, tokenState, userState } from '../recoil/atoms'
import { getTokenFromUrl } from '../spotify'

const spotify = new SpotifyWebApi()

const useSpotifyData = () => {
  const [token, setToken] = useRecoilState(tokenState)
  const [user, setUser] = useRecoilState(userState)
  const [playlists, setPlaylists] = useRecoilState(playlistsState)
  const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState)

  const [isToken, setIsToken] = useState(false)

  useEffect(async () => {
    const hash = getTokenFromUrl()
    const _token = hash.access_token
    if (_token) {
      setToken(_token)
      setIsToken(true)
      spotify.setAccessToken(_token)
      spotify.getMe().then(data => setUser(data))
      spotify.getUserPlaylists().then(playlists => setPlaylists(playlists))
      spotify.getMyCurrentPlayingTrack().then(data => setCurrentTrack({
        name: data?.item?.name,
        image: data?.item?.album?.images[0]?.url,
        artists: data?.item?.artists,
        id: data?.item?.id,
        isPlaying: data?.is_playing
      }))
    }
  }, [token])

  return {
    token,
    user,
    playlists,
    currentTrack,
    isToken
  }
}

export default useSpotifyData
