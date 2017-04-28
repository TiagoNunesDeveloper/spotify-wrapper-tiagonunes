import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
import {getAlbum, getAlbums, getAlbumTracks} from '../src/albums'

chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

describe('Album', () => {

  let fetchedStub

  beforeEach(() => fetchedStub = sinon.stub(global, 'fetch').returnsPromise())

  afterEach(() => fetchedStub.restore())

  describe('smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist
    })

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist
    })
  })

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      getAlbum()
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      getAlbum('1SVgtBdLoi6rE382pl62HR')
      expect(fetchedStub)
        .to
        .been
        .calledWith('https://api.spotify.com/v1/albums/1SVgtBdLoi6rE382pl62HR')

      getAlbum('1SVgtBdLoi6rE382pl62Hq')
      expect(fetchedStub)
        .to
        .been
        .calledWith('https://api.spotify.com/v1/albums/1SVgtBdLoi6rE382pl62Hq')
    })

    it('should return the JSON Data from the Promise', () => {

      fetchedStub.resolves({album: 'name'})

      const album = getAlbum('1SVgtBdLoi6rE382pl62HR')
      expect(album.resolveValue)
        .to
        .be
        .eql({album: 'name'})
    })
  })

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      getAlbums()
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      getAlbums(['1SVgtBdLoi6rE382pl62HR', '6iAY2AyUZLSX3PWLIAfFZY'])
      expect(fetchedStub)
        .to
        .been
        .calledWith('https://api.spotify.com/v1/albums/?ids=1SVgtBdLoi6rE382pl62HR,6iAY2AyUZLSX3PWLIA' +
            'fFZY')
    })

    it('should return the JSON Data from the Promise', () => {

      fetchedStub.resolves({album: 'name'})

      const album = getAlbums(['1SVgtBdLoi6rE382pl62HR', '6iAY2AyUZLSX3PWLIAfFZY'])
      expect(album.resolveValue)
        .to
        .be
        .eql({album: 'name'})
    })
  })

  describe('getAlbumsTracks', () => {
    it('should call fetch method', () => {
      getAlbumTracks()
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      getAlbumTracks('1SVgtBdLoi6rE382pl62HR')
      expect(fetchedStub)
        .to
        .been
        .calledWith('https://api.spotify.com/v1/albums/1SVgtBdLoi6rE382pl62HR/tracks')
    })

    it('should return the JSON Data from the Promise', () => {

      fetchedStub.resolves({album: 'name'})

      const album = getAlbumTracks('1SVgtBdLoi6rE382pl62HR')
      expect(album.resolveValue)
        .to
        .be
        .eql({album: 'name'})
    })
  })

})
