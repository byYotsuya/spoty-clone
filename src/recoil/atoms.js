import { atom } from 'recoil'

export const tokenState = atom({
  key: 'tokenState', // unique ID (with respect to other atoms/selectors)
  default: null // default value (aka initial value)
})

export const userState = atom({
  key: 'userState', // unique ID (with respect to other atoms/selectors)
  default: null // default value (aka initial value)
})

export const playlistsState = atom({
  key: 'playlistsState', // unique ID (with respect to other atoms/selectors)
  default: [] // default value (aka initial value)
})

export const currentTrackState = atom({
  key: 'currentTrackState', // unique ID (with respect to other atoms/selectors)
  default: {} // default value (aka initial value)
})
