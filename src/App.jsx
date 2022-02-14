import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'
import HomePage from './pages/HomePage'
import Playlist from './pages/Playlist'

// utils
import Layout from './components/Layout'

// recoil
import PlaylistPage from './pages/PlaylistPage'
import useSpotifyData from './hooks/useSpotifyData'

function App () {
  const location = useNavigate()
  const { isToken } = useSpotifyData()
  useEffect(() => {
    if (!isToken) location('/login')
  }, [])
  return (
    <>
      <Routes>
        <Route index element={<Layout><HomePage /></Layout>} />
        <Route path='search' element={<Layout><SearchPage /></Layout>} />
        <Route path='playlists' element={<Layout><Playlist /></Layout>} />
        <Route path='playlist/:id' element={<Layout><PlaylistPage /></Layout>} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App

/**
 *
 * const [token, setToken] = useRecoilState(tokenState)
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useRecoilState(userState)
  // eslint-disable-next-line no-unused-vars
  const [playlists, setPlaylists] = useRecoilState(playlistsState)
  // eslint-disable-next-line no-unused-vars
  const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState)

  useEffect(async () => {
    const hash = getTokenFromUrl()
    const _token = hash.access_token
    if (!token) location('/login')

    if (_token) {
      setToken(_token)
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
 */
