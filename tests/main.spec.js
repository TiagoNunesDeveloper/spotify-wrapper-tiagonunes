import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
import {search, searchAlbums, searchArtists, searchTracks, searchPlaylists} from '../src/main'

chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

describe('Spotify Wrapper', () => {

  let fetchedStub

  beforeEach(() => fetchedStub = sinon.stub(global, 'fetch').returnsPromise())

  afterEach(() => fetchedStub.restore())

  describe('smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist
    })
    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist
    })
    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    })
    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    })
    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    })
  })

  describe('Generic Search', () => {
    it('should call fetch function', () => {

      search()
      expect(fetchedStub).to.have.been.calledOnce;

    })

    it('should receive the correct url to fetch', () => {

      context('passing one type', () => {

        search('Fernandinho', 'artist')
        expect(fetchedStub)
          .to
          .have
          .been
          .calledWith('https://api.spotify.com/v1/search?q=Fernandinho&type=artist')

        search('Fernandinho', 'album')
        expect(fetchedStub)
          .to
          .have
          .been
          .calledWith('https://api.spotify.com/v1/search?q=Fernandinho&type=album')

      })

      context('passing more than one type', () => {

        search('Fernandinho', ['artist', 'album'])
        expect(fetchedStub)
          .to
          .have
          .been
          .calledWith('https://api.spotify.com/v1/search?q=Fernandinho&type=artist,album')

      })
    })

    it('should return the JSON Data from the Promise', () => {

      fetchedStub.resolves({body: 'json'})

      const artists = search('Fernandinho', 'artist')
      expect(artists.resolveValue)
        .to
        .be
        .eql({body: 'json'})
    })
  })
})
