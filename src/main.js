export const search = (Query, Type) => fetch(`https://api.spotify.com/v1/search?q=${Query}&type=${Type}`).then(data => data.json())
export const searchAlbums = () => {}
export const searchArtists = () => {}
export const searchTracks = () => {}
export const searchPlaylists = () => {}
