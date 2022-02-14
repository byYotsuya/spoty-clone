import { selector } from 'recoil'
import { currentTrackState, playlistsState, tokenState } from './atoms'

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

export const getCurrentTrack = selector({
  key: 'getCurrentTrack', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const currentTrack = get(currentTrackState)
    return currentTrack
  }
})
