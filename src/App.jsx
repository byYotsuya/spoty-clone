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
