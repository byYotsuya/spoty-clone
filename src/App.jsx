import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-js'
import { useRecoilState } from 'recoil'

// pages
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'
import HomePage from './pages/HomePage'
import Playlist from './pages/Playlist'

// utils
import Layout from './components/Layout'
import { getTokenFromUrl } from './spotify'

// recoil
import { playlistsState, tokenState, userState } from './recoil/atoms'

const spotify = new SpotifyWebApi()

function App () {
  const [token, setToken] = useRecoilState(tokenState)
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useRecoilState(userState)
  // eslint-disable-next-line no-unused-vars
  const [__, setPlaylists] = useRecoilState(playlistsState)

  const location = useNavigate()

  useEffect(async () => {
    const hash = getTokenFromUrl()
    const _token = hash.access_token
    if (!token) location('/login')

    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token)
      spotify.getMe().then(data => setUser(data))
      spotify.getUserPlaylists().then(playlists => setPlaylists(playlists))
    }
  }, [])

  return (
    <>
      <Routes>
        <Route index element={<Layout><HomePage /></Layout>} />
        <Route path='search' element={<Layout><SearchPage /></Layout>} />
        <Route path='playlist' element={<Layout><Playlist /></Layout>} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
