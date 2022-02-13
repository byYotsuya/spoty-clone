import { selector } from 'recoil'
import { playlistsState, tokenState } from './atoms'

export const getToken = selector({
  key: 'getToken', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(tokenState)
    return text
  }
})

export const getPlaylists = selector({
  key: 'getPlaylists', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const playlists = get(playlistsState)
    return playlists
  }
})
