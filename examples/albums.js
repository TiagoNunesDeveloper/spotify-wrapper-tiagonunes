global.fetch = require('node-fetch')

import {searchAlbums} from '../src/main'

const albums = searchAlbums('Fernandinho')

albums.then(data => data.albums.items.map(item => console.log(item.name)))
