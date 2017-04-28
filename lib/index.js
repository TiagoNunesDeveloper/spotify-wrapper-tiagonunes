'use strict';

var _search = require('./search.js');

var _albums = require('./albums');

module.exports = {
  search: _search.search,
  searchAlbums: _search.searchAlbums,
  searchArtists: _search.searchArtists,
  searchPlaylists: _search.searchPlaylists,
  searchTracks: _search.searchTracks,
  getAlbum: _albums.getAlbum,
  getAlbumTracks: _albums.getAlbumTracks,
  getAlbums: _albums.getAlbums
};