export const auth = 'https://accounts.spotify.com/en/authorize'

const redirectUri = 'http://localhost:3000'

const clientId = 'cdef6cfd89e349839cf81ef6cd4ac9ec'

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state'
]

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])

      return initial
    }, {})
}

export const loginUrl = `${auth}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('+')}&response_type=token&show_dialog=true`
